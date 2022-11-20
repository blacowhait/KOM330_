const { string } = require('joi');
const { Schema, model, SchemaTypes } = require('mongoose')

const constant = require('../constant')

const RecordSchema = new Schema({
	amount : {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	div: {
		type: String,
		required: true
	},
	rType: {
		type: String,
		enum: [...constant.enum.recordType, null]
	},
	note: {
		type: String,
		required: true
	},
	extraNote: {
		type: String
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

RecordSchema.set('toObject', { virtuals: true });
RecordSchema.set('toJSON', { virtuals: true });
RecordSchema.pre("save", async function (next) {
	try {
		this.updatedAt = Date.now();
		next();
	} catch (error) {
		next(error);
	}
});

module.exports = model(
	constant.model.RECORD,
	RecordSchema,
	constant.collection.RECORD
);