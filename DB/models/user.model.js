import { Schema } from "mongoose";
import {
  validateEmail,
  validatePassword,
} from "../../utilits/functionValidation";
import bcrypt from "bcrypt";
const schema = new Schema({
  username: { type: String, required: true, min: 2, max: 50 },
  email: {
    type: String,
    required: true,
    min: 2,
    max: 50,
    validate: {
      validator: validateEmail,
      message: "Invalid Email",
    },
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 50,
    validate: {
      validator: validatePassword,
      message:
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers",
    },
  },
  authorize: {
    type: [String],
    required: true,
    enum: ["wolsey", "mhc", "arub"],
  },
  avatar: { type: String },
});

schema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

schema.methods.comparePassword = async function (password) {
  password = await bcrypt.compare(password, this.password);
};
