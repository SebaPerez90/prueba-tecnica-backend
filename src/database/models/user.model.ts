import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  lastName: String,
  birthDate: String,
  password: String,
  email: String,
});

export const User = model("User", UserSchema);
