const UserModel = require('../model/user');

const UserController = require('../controller/user');
// const AdminController = require('../controller/admin');

const jwt = require('../service/jwt');
const { returnMessage } = require('../constant')

const crypto = require('crypto');
const bcrypt = require('bcryptjs');

class AuthController {
	static async userRegistration(req, res) {
		if (process.env.OPEN_REGIST != "true") {
            return res.status(403).json({
                success: false,
                message: "Pendafataran ditutup"
            })
        }
        try {
        	let { name, email, password } = req.value.body;
        	/*if (!MailChecker.isValid(email)) {
                return res.status(400).json({ message: returnMessage.auth.EMAIL_NOT_VALID})
            }*/
            UserModel.findOne({ email }, async function (err, user) {
            	// If user already exist
                if (user) return res.status(409).json({ message: `${returnMessage.auth.REGISTER_FAIL}, ${returnMessage.EMAIL_EXIST}` });

                // If not exist, create account
                let verifyEmailToken = crypto.randomBytes(16).toString('hex');
                let userData = await UserController.create(name, email, password);

                // if there is error when create new user
                if (userData.error) {
                    return res.status(400).json({ message: userData.message });
                }

                // remove unnecessary information
                userData = userData.toObject();
                delete userData.password;
                delete userData.createdAt;
                delete userData.updatedAt;

                return res.status(201).json({
                    success: true,
                    message: `Email verifikasi berhasil dikirim ke ${email}. Jika tidak terdapat di inbox, silahkan cek di kategori promotions dan spam.`,
                    user: userData
                });
            })
        }
        catch (e) {
            return res.status(500).json({
                success: false,
                message: e.message
            });
        }
	}

	static async userLogin(req, res) {
		try {
			let { email, password } = req.value.body;
			UserModel.findOne({ email }, '_id name email title', async function (err, user) {
                // console.log(user)
                if (!user) {
                    return res.status(404).json({ message: `${returnMessage.auth.LOGIN_FAIL}, ${returnMessage.auth.EMAIL_NOT_FOUND}` });
                }
                /*if (!user.isVerifiedEmail) {
                    return res.status(401).json({ message: `${returnMessage.auth.LOGIN_FAIL}, ${returnMessage.auth.EMAIL_NOT_VERIVIED}` });
                }*/

                let isMatch = await UserController.login(email, password);
                if (isMatch) {
                	if (user.title === "div") {
                		let token = jwt.signTokenToDiv(user);
	                    return res.status(200).json({
	                        success: true,
	                        message: "berhasil login",
	                        user, token
	                    });
                	} else {
                		let token = jwt.signTokenToPst(user);
	                    return res.status(200).json({
	                        success: true,
	                        message: "berhasil login",
	                        user, token
	                    });
                	}
                } else {
                    return res.status(401).json({
                        success: false,
                        message: `${returnMessage.auth.LOGIN_FAIL}, ${returnMessage.auth.PASSWORD_WRONG}`
                    });
                }
            });
		}
		catch (e) {
            return res.status(500).json({
                success: false,
                message: e.message,
                captain: null,
                token: null
            })
        }
	}
}

module.exports = AuthController;