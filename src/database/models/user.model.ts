import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  title: String,
  poster: String,
  rate: Number,
  director: String,
  genre: Array,
  year: Number,
});

export const Movie = model("Movie", UserSchema);
