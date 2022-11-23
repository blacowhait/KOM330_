const { string } = require('joi');
const { Schema, model, SchemaTypes } = require('mongoose')

const constant = require('../constant')

const SpjSchema = new Schema({
	spjFile : {
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
	div: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: constant.enum.SpjStatus[0]
	},
	notes: {
		type: String
	},
	comment: {
		type: String,
		default: constant.enum.comment
	}
});

SpjSchema.set('toObject', { virtuals: true });
SpjSchema.set('toJSON', { virtuals: true });
SpjSchema.pre("save", async function (next) {
	try {
		this.updatedAt = Date.now();
		next();
	} catch (error) {
		next(error);
	}
});

module.exports = model(
	constant.model.SPJ,
	SpjSchema,
	constant.collection.SPJ
);