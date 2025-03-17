import mongoose, { Schema } from "mongoose";
import {
  validateEmail,
  validatePhone,
} from "../../utilits/functionValidation.js";

const schema = new Schema({
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validateEmail,
      message: "Invalid Email",
    },
  },
  phone: {
    type: String,
    validate: {
      validator: validatePhone,
      message: "Invalid phone number",
    },
  },

  message: { type: String, min: 2 },
  cv: {
    type: String,
    required: true,
  },
});

schema.pre("findByIdAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update) {
    appendServerUrl(update);
  }
  next();
});

const candidateModel = mongoose.model("candidate", schema);

export default candidateModel;
