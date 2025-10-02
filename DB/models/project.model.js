import { Schema } from "mongoose";
import mongoose from "mongoose";

const schema = new Schema({
  title: { type: String, required: true, min: 2, max: 50 },
  description: { type: String, min: 2, max: 500 },
  mainImg: { type: String, required: true },
  gallery: { type: Array, required: true },
  location: { type: String },
  publish: {
    type: String,
    required: true,
    enum: ["published", "unPublished"],
    default: "unPublished",
  },
  state: {
    type: String,
    required: true,
    enum: ["complete", "pending"],
    default: "complete",
  },
  startDate: { type: Date },
  endDate: { type: Date },
});

schema.pre("find", function (next) {
  console.log("middleware");
  next();
});
const projectModel = mongoose.model("Project", schema);

export default projectModel;
//company