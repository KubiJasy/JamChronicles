import { User, RefreshToken } from "../models";
import errorHandlerWrapper from "../utils/errorHandlerWrapper";
import withTransaction from "../utils/withTransaction.js";
import { CustomAPIError } from "../errors/customAPIError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Helper functions
const generateAccessToken = (userID) => {
  return jwt.sign({ userID }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (userID, refreshTokenID) => {
  return jwt.sign({ userID, refreshTokenID }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "30d",
  });
};

const validateRefreshToken = async (encRefreshToken) => {
  // get the payload of the token
  const { userID, refreshTokenID } = jwt.verify(
    encRefreshToken,
    process.env.REFRESH_TOKEN_KEY
  );
  const refreshTokenDoc = await RefreshToken.exists({
    _id: refreshTokenID,
    owner: userID,
  });

  if (refreshTokenDoc) return { userID, refreshTokenID };
  else {
    throw new CustomAPIError(401, "Unauthorised");
  }
};

// @desc
// @route
// @access
const createUser = errorHandlerWrapper(
  withTransaction(async (req, res, next, session) => {
    // check if email exists in db
    const existingUser = await User.find({ email: req.body.email });
    if (existingUser.length > 0) {
      throw new CustomAPIError(409, "Email already exists in database");
    }
    const user = await User.create([req.body], { session });
    const { id: userID, firstName } = user[0];
    const refreshTokenDoc = await RefreshToken.create([{ owner: userID }], {
      session,
    });

    const accessToken = generateAccessToken(userID);
    const refreshToken = generateRefreshToken(userID, refreshTokenDoc[0].id);

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: "None", //to support cross-site cookie
      maxAge: 30 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });

    return [{ user: { userID, firstName }, accessToken }, 201];
  })
);

// @desc - log a user in
// @route - auth/login
// @access - public, entry into the company building
const login = errorHandlerWrapper(
  withTransaction(async (req, res, next, session) => {
    const { email, password } = req.body;

    // check if email exists in database
    const user = await User.findOne({ email }).select("+password");
    if (!user) throw new CustomAPIError(401, "Wrong email or password");

    // check if password hashes match
    const match = await user.comparePassword(password);
    if (!match) throw new CustomAPIError(401, "Incorrect password");

    // generate access and refresh tokens
    const { id: userID, firstName } = user;
    const refreshTokenDoc = await RefreshToken.create([{ owner: userID }], {
      session,
    });

    const accessToken = generateAccessToken(userID);
    const refreshToken = generateRefreshToken(userID, refreshTokenDoc[0].id);

    // send the same sign up response
    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: "None", //to support cross-site cookie
      maxAge: 30 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });

    return [{ user: { userID, firstName }, accessToken }];
  })
);

// @desc
// @route auth/regenerate-token
// @access
const regenerateAccessToken = errorHandlerWrapper(async (req, res, next) => {
  // check validity of refresh token in the cookie (is it in the db?)
  if (!req.cookies?.jwt) throw new CustomAPIError(401, "Unauthorised");
  const encRefreshToken = req.cookies.jwt;
  const { userID } = await validateRefreshToken(encRefreshToken);

  // if all clear, generate new access token and send back in response
  const accessToken = generateAccessToken(userID);

  return [{ userID, accessToken }];
});

// @desc
// @route
// @access
const logout = errorHandlerWrapper(
  withTransaction(async (req, res, next, session) => {
    // check validity of refresh token
    if (!req.cookies?.jwt) throw new CustomAPIError(204, "No content");
    const encRefreshToken = req.cookies.jwt;
    const { userID, refreshTokenID } = await validateRefreshToken(
      encRefreshToken
    );
    // delete refresh token
    await RefreshToken.deleteOne(
      { _id: refreshTokenID, owner: userID },
      { session }
    );
    // reset cookie
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

    // return success response
    return [];
  })
);

export { createUser, login, regenerateAccessToken, logout };
