const { string } = require('joi');
const { Schema, model, SchemaTypes } = require('mongoose')

const constant = require('../constant')

const UserSchema = new Schema({
	name : {
		type: String,
		minlength: 2,
		maxlength: 50,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	title: {
		type: String,
		default: constant.enum.titleLower[0]
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		required: true,
		default: Date.now()
	},
	verifyEmailToken: {
		type: String
	},
	isVerifiedEmail: {
		type: Boolean,
		default: false,
		required: true
	},
	changeEmailToken: {
		type: String
	},
	verifyEmailDate: {
		type: Date
	}
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

UserSchema.pre("save", async function (next) {
	try {
		this.updatedAt = Date.now();
		next();
	} catch (error) {
		next(error);
	}
});

// create and export a model
module.exports = model(
	constant.model.USER,
	UserSchema,
	constant.collection.USER
);