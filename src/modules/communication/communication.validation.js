import Joi from "joi";
import {
  emailPattern,
  phonePattern,
} from "../../../utilits/functionValidation.js";
export const createCommunicationSchmea = Joi.object({
  name: Joi.string().min(2).max(500).required(),
  position: Joi.string().min(2).max(1000).required(),
  companyName: Joi.string().min(2).max(1000).required(),
  email: Joi.string().pattern(emailPattern).required(),
  phone: Joi.string().pattern(phonePattern).required(),
  industry: Joi.string()
    .valid(
      "Urban Planning",
      "Architecture",
      "Oil & Gas",
      "Electromechanics",
      "Marine engineering",
      "Structural engineering"
    )
    .required(),
  message: Joi.string().min(2),
});
