const RabModel = require('../model/rab')
const UserModel = require('../model/user')

const appRoot = require('app-root-path');
const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class RabController {
	static async inputRab (req, res) {
		try {
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');
			console.log(req.file)
			const nameFile = req.file.filename;

			let rab = await RabModel.create({
				rabFile: nameFile,
				name: req.body.name,
				status: "WAIT",
				div: div.dept
			});

			return res.status(200).json({
            	success: true,
            	rab
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async showRab (req, res) {
		try {
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');
			let rabs = await RabModel.find({ div: div.dept });
			console.log(div.dept)
			return res.status(200).json({ rabs });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async check (req,res) {
		try {
			let { id } = req.params;
			const rab = await RabModel.findOne({ _id: id}).select('-createdAt');
			if (!rab) {
	            return next(createError(404, "rab not found"))
	        }
			let { status, comment } = req.value.body;
			rab.status = status;
			rab.comment = comment;
			await rab.save();

			return res.status(200).json({
            	success: true,
            	rab: rab.data
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async showAllRab (req, res) {
		try {
			const rab = await RabModel.find({});
			return res.status(200).json({
            	success: true,
            	rab
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async downloadRab (req,res) {
		try {
			let { id } = req.params;
			const rab = await RabModel.findOne({ _id: id}).select('rabFile');
			if (!rab) {
	            return next(createError(404, "rab not found"))
	        }
			console.log(rab.rabFile);

			return res.download("uploads/rab/" + rab.rabFile, function (err) {
				if (err) {
						console.log(err);
				}
			});
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}
}

module.exports = RabController;