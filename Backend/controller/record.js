const RecordModel = require('../model/record')

const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class RecordController {
	static async inputRecord(req,res) {
		try {
			let {} = 
		}
		catch (e) {
            return res.status(500).json({
                success: false,
                message: e.message
            });
        }
	}
}