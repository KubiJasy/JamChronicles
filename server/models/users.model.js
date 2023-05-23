import mongoose from "mongoose";
import emailValidator from "email-validator";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "This field is required"],
      trim: true,
      maxLength: 45,
      minLength: 3,
    },
    lastName: {
      type: String,
      required: [true, "This field is required"],
      trim: true,
      maxLength: 45,
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "This field is required"],
      trim: true,
      maxLength: 45,
      index: { unique: true },
      validate: emailValidator.validate,
    },
    password: { type: String, minLength: 8, select: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function preSave(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function comparePassword(
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("users", userSchema);
