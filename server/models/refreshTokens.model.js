import mongoose, { Schema } from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

export default mongoose.model("refresh_tokens", refreshTokenSchema);
