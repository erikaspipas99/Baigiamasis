import Joi from "joi";

export const textValidate = Joi.object({
  id: Joi.string().min(4).required(),
  adresses: Joi.string().min(2).max(100).required(),
  ip: Joi.string()
    .ip({ version: ["ipv4"] })
    .required(),
});
