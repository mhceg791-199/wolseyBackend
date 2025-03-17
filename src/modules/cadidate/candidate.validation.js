import Joi from "joi";
import {
  emailPattern,
  phonePattern,
} from "../../../utilits/functionValidation.js";
export const createcandidateSchmea = Joi.object({
  firstName: Joi.string().min(2).max(500).required(),
  lastName: Joi.string().min(2).max(500).required(),
  position: Joi.string().min(2).max(1000).required(),
  email: Joi.string().pattern(emailPattern).required(),
  phone: Joi.string().pattern(phonePattern).required(),
  message: Joi.string().min(2),
});
