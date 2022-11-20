let joi = require('joi');
const validateBody = require('../middleware/validator')
const constant = require("../constant")

module.exports = {
	validateBody,
    schemas: {
        inputRecord: joi.object().keys({
            // amount, quantity, note, extraNote, rType
            amount: joi.number().required(),
            quantity: joi.number().required(),
            note: joi.string().required(),
            extraNote: joi.string(),
            rType: joi.string().valid(...constant.enum.recordType)
        }),
        userLogin: joi.object().keys({
            email: joi.string().email().trim().lowercase().required(),
            password: joi.string().required()
        })
    }
}