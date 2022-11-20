const RabModel = require('../model/record')
const UserModel = require('../model/user')

const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class RabController {
	static async inputRAB (req, res) {
		try {
			
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}
}