import Joi from "joi";
import imgSchema from "../../../utilits/customValidationSchema/imgSchema.js";

const baseSchema = {
  title: Joi.string().min(2).max(50),
  description: Joi.string().min(2).max(500),
  mainImg: imgSchema,
  gallery: imgSchema,
  location: Joi.string(),
  publish: Joi.string().valid("published", "unPublished"),
  state: Joi.string().valid("published", "unPublished"),
  startDate: Joi.date(),
  endDate: Joi.date(),
};
export const projectSchema = Joi.object({
  ...baseSchema,
  title: Joi.string().required(),
  description: Joi.string().required(),
  mainImg: imgSchema,
  gallery: imgSchema,
  publish: Joi.string().valid("published", "unPublished"),
  state: Joi.string().valid("published", "unPublished"),
});

export const projectEditSchema = Joi.object({
  ...baseSchema,
  id: Joi.string().hex().length(24).required(),
});

export const projectDeleteSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});
