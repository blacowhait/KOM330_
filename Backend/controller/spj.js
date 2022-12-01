const SpjModel = require('../model/spj')
const UserModel = require('../model/user')

const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class SpjController {
	static async inputSpj (req, res) {
		try {
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');
			const nameFile = req.file.filename;

			let spj = await SpjModel.create({
				spjFile: nameFile,
				name: req.body.name,
				status: "WAIT",
				div: div.dept
			});

			return res.status(200).json({
            	success: true,
            	spj
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async showSpj (req, res) {
		try {
			const div = await UserModel.findOne({ _id: req.decoded.sub }).select('dept');
			let spjs = await SpjModel.find({ div: div.dept });
			console.log(div.dept)
			return res.status(200).json({ spjs });
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
			const spj = await SpjModel.findOne({ _id: id}).select('-createdAt');
			if (!spj) {
	            return next(createError(404, "spj not found"))
	        }
			let { status, comment } = req.value.body;
			spj.status = status;
			spj.comment = comment;
			await spj.save();

			return res.status(200).json({
            	success: true,
            	spj: spj
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async showAllSpj (req, res) {
		try {
			const spj = await SpjModel.find({});
			return res.status(200).json({
            	success: true,
            	spj
            });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async downloadSpj (req,res) {
		try {
			let { id } = req.params;
			const spj = await SpjModel.findOne({ _id: id}).select('spjFile');
			if (!spj) {
	            return next(createError(404, "spj not found"))
	        }
			console.log(spj.spjFile);

			return res.download("uploads/spj/" + spj.spjFile, function (err) {
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

module.exports = SpjController;