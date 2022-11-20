const { string } = require('joi');
const { Schema, model, SchemaTypes } = require('mongoose')

const constant = require('../constant')

const RabSchema = new Schema({
	file : {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	},
	status: {
		type: String,
		default: constant.enum.RabStatus[0]
	},
	notes: {
		type: String
	},
	comment: {
		type: String,
		default: constant.enum.comment
	}
});

RabSchema.set('toObject', { virtuals: true });
RabSchema.set('toJSON', { virtuals: true });
RabSchema.pre("save", async function (next) {
	try {
		this.updatedAt = Date.now();
		next();
	} catch (error) {
		next(error);
	}
});