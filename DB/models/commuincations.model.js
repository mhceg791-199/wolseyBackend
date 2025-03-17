import mongoose, { Schema } from "mongoose";
import {
  validateEmail,
  validatePhone,
} from "../../utilits/functionValidation.js";

const schema = new Schema({
  name: { type: String, required: true, min: 2, max: 50 },
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
  position: {
    type: String,
    required: true,
    min: 2,
    max: 500,
  },
  companyName: {
    type: String,
    required: true,
    min: 2,
    max: 1000,
  },
  industry: {
    type: String,
    required: true,
    enum: [
      "Urban Planning",
      "Architecture",
      "Oil & Gas",
      "Electromechanics",
      "Marine engineering",
      "Structural engineering",
    ],
    message: { type: String, min: 2 },
  },
  document: {
    type: String,
    required: true,
  },
});

// Utility function to append SERVER_URL to file fields
function appendServerUrl(doc) {
  const fileFields = ["document"];
  fileFields.forEach((field) => {
    if (doc[field]) {
      doc[field] =
        `${process.env.SERVER_URL}/communicationFolder/` + doc[field];
    }
  });
}

// Schema post hooks for save and find operations
schema.post("save", (doc) => {
  appendServerUrl(doc);
});

schema.post("findById", (doc) => {
  appendServerUrl(doc);
});

schema.post("find", (docs) => {
  docs.forEach((doc) => appendServerUrl(doc));
});

// Schema pre hook for findByIdAndUpdate
schema.pre("findByIdAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update) {
    appendServerUrl(update);
  }
  next();
});

const commuicationModel = mongoose.model("communication", schema);

export default commuicationModel;
