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

	static async showInfo(req, res) {
		try {
			const deptRecords = await RecordModel.find({ div: req.decoded.div });
			let masuk = 0;
			let keluar = 0;
			let selisih = 0;
			const data = new Array();

			for (const deptRecord of deptRecords) {
				console.log(deptRecord)
				if (deptRecord.rType == '+') {
					masuk += deptRecord.total;
				}
				else if (deptRecord.rType == '-') {
					keluar += deptRecord.total;
				}
				else {
					return res.status(500).json({
						success: false,
						message: "error when ngitung"
					});
				}
			}

			selisih = masuk - keluar;
			data.push({
				"label": "pemasukan",
				"jumlah": masuk
			})
			data.push({
				"label": "pengeluaran",
				"jumlah": keluar
			})
			data.push({
				"label": "selisih",
				"jumlah": selisih
			})
			return res.status(200).json({ data });
		}
		catch (e) {
			return res.status(500).json({
                success: false,
                message: e.message
            });
		}
	}

	static async getDept(req, res) {
		try {
			let { dept } = req.params;
			let records = await RecordModel.find({ div: dept });
			console.log(dept)
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