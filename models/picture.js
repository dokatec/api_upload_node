import mongoose, { Schema } from "mongoose";

const PictureSchema = new Schema({
  name: { type: String, require: true },
  src: { type: String, required: true },
});

const Picture = mongoose.model("Pictures", PictureSchema);

export default Picture;
