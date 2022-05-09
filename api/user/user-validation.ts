import Joi from 'joi'

const register = (data) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(12).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeat_password: Joi.ref('password'),

    })
    return schema.validate(data, { abortEarly: false });
}

const login = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    return schema.validate(data, { abortEarly: false });
}

export const userValidation = {
    register,
    login
}