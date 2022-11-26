const UserModel = require('../model/user');

const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const fs = require('fs')
const constant = require("../constant")
const { returnMessage } = require('../constant')

class UserController {
    static async create(name, email, password, dept, verifyEmailToken) {
        try {
            // Make hashed password
            const salt = await bcrypt.genSalt(10);
            let passwordHash = await bcrypt.hash(password, salt);

            return UserModel.create({
                name,
                email,
                password: passwordHash,
                verifyEmailToken,
                dept
            });
        } catch (e) {
            return {
                error: true,
                message: e.message
            }
        }
    }

    static async login(email, password) {
        let user = await UserModel.findOne({ email });
        let passwordMatch = await bcrypt.compare(password, user.password);
        return passwordMatch ? true : false;
    }
}

module.exports = UserController;