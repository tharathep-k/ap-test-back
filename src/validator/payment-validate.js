const Joi = require("joi");

const paymentSchema = Joi.object({
  housenumber: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]/)
    .messages({
      "string.empty": "*",
    }),
  moo: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]/)
    .messages({
      "string.empty": "*",
    }),
  province: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  district: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  subdistrict: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  code: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]{5}$/)
    .messages({
      "string.empty": "*",
    }),
}).unknown(true);

exports.paymentRegister = (input) => {
  const { value, error } = paymentSchema.validate(input, { abortEarly: false });
  if (error) {
    throw error;
  }
  return value;
}
