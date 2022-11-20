const RecordModel = require('../model/record')
const UserModel = require('../model/user')

const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class RecordController {
	static async inputRecord(req,res) {
		try {
			let { amount, quantity, note, extraNote, rType } = req.value.body;
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');

			let total = amount * quantity;
			console.log(div.dept)
			let record = await RecordModel.create({
                amount,
                quantity,
                note,
                extraNote,
                rType,
                div: div.dept,
                total
            });

            if (record) {
            	console.log(record)
            }

            return res.status(200).json({
            	success: true,
            	record: record.data
            });
		}
		catch (e) {
            return res.status(500).json({
                success: false,
                message: e.message
            });
        }
	}

	static async showRecord(req, res) {
		try {
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');
			let records = await RecordModel.find({ div: div.dept });
			console.log(div.dept)
			return res.status(200).json({ records });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}
}

module.exports = RecordController;