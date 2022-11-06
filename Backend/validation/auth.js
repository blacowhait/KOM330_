let joi = require('joi');
const validateBody = require('../middleware/validator')

module.exports = {
	validateBody,
    schemas: {
        userRegistration: joi.object().keys({
            name: joi.string().min(2).max(50).required(),
            email: joi.string().email().trim().lowercase().required(),
            password: joi.string()
                .required()
                .min(8)
                .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/))
                .error(errors => {
                    errors.forEach(err => {
                        if (err.type === "string.regex.base") {
                            err.message = "Kata sandi harus mengandung kombinasi huruf kapital, non kapital, dan angka";
                        }
                    })
                    return errors;
                })
        }),
        userLogin: joi.object().keys({
            email: joi.string().email().trim().lowercase().required(),
            password: joi.string().required()
        })
    }
}