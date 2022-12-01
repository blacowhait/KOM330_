let joi = require('joi');
const validateBody = require('../middleware/validator')
const constant = require("../constant")

module.exports = {
	validateBody,
	schemas: {
		check: joi.object().keys({
			status: joi.string().required(),
			comment: joi.string().required()
		}),
		inputRab: joi.object().keys({
			rabFile: joi.allow("", "undefined"),
			name: joi.string().required()
		}),
	}
}