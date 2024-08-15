import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  phone: Number,
  password: String,
  email: String,
});

export const User = model("User", UserSchema);
