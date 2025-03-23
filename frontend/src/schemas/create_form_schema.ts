import Joi from "joi";

export interface FormeSchema {
    name: string,
}

export const joiSchema = Joi.object({
    name: Joi.string().min(4).required(),
});
