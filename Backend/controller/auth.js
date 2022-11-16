const UserModel = require('../model/user');

const UserController = require('../controller/user');
// const AdminController = require('../controller/admin');

const jwt = require('../service/jwt');
const Mail = require('../service/mail');
const { returnMessage } = require('../constant')

const crypto = require('crypto');
const bcrypt = require('bcryptjs');
var MailChecker = require('mailchecker');

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
        	if (!MailChecker.isValid(email)) {
                return res.status(400).json({ message: returnMessage.auth.EMAIL_NOT_VALID})
            }
            UserModel.findOne({ email }, async function (err, user) {
            	// If user already exist
                if (user) return res.status(409).json({ message: `${returnMessage.auth.REGISTER_FAIL}, ${returnMessage.EMAIL_EXIST}` });

                // If not exist, create account
                let verifyEmailToken = crypto.randomBytes(16).toString('hex');
                let userData = await UserController.create(name, email, password, verifyEmailToken);

                // if there is error when create new user
                if (userData.error) {
                    return res.status(400).json({ message: userData.message });
                }
                console.log(verifyEmailToken)
                // verif
                await Mail.sendVerifyEmail(name, email, verifyEmailToken);

                // remove unnecessary information
                userData = userData.toObject();
                delete userData.resetPasswordToken;
                delete userData.verifyEmailToken;
                delete userData.changeEmailToken;
                delete userData.verifyEmailDate;
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
			UserModel.findOne({ email }, '_id name email title isVerifiedEmail', async function (err, user) {
                // console.log(user)
                if (!user) {
                    return res.status(404).json({ message: `${returnMessage.auth.LOGIN_FAIL}, ${returnMessage.auth.EMAIL_NOT_FOUND}` });
                }
                
                if (!user.isVerifiedEmail) {
                    return res.status(401).json({ message: `${returnMessage.auth.LOGIN_FAIL}, ${returnMessage.auth.EMAIL_NOT_VERIVIED}` });
                }

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
                user: null,
                token: null
            })
        }
	}

    static async verifyEmail(req, res) {
        try {
            if (!req.query.email || !req.query.token) {
                return res.status(400).json({ message: `${returnMessage.DATA_INCOMPLETE}` });
            }

            UserModel.findOne({ email: req.query.email },
                '_id name email title isVerifiedEmail verifyEmailToken verifyEmailDate',
                function (err, user) {
                    // make sure account exist
                    if (!user) {
                        return res.redirect(process.env.FRONT_END_URL + `/email/failed?&message='${returnMessage.auth.EMAIL_VERIFY_FAIL}, ${returnMessage.auth.EMAIL_NOT_FOUND}'`)
                    }

                    if (user.verifyEmailToken === req.query.token) {
                        user.isVerifiedEmail = true;
                        user.verifyEmailToken = null;
                        user.verifyEmailDate = Date.now();
                        user.vrfEmailStat = "ALREADY";
                        user.save();

                        // redirect to front end "Email Verified Page"
                        // return res.redirect(process.env.FRONT_END_URL + `/account/email/verification/verified?name=${user.name}&email=${user.email}&message='${returnMessage.auth.EMAIL_VERIFY_SUCCESS}'`)
                        return res.redirect(process.env.FRONT_END_URL + `/account/email/verification?verified=true&email=${user.email}`)
                    } else {
                        // return res.redirect(process.env.FRONT_END_URL + `/account/email/verification/failed?name=${user.name}&email=${user.email}&message='${returnMessage.auth.EMAIL_VERIFY_FAIL}, ${returnMessage.auth.TOKEN_INVALID}'&token=${req.query.token}`)
                        return res.redirect(process.env.FRONT_END_URL + `/account/email/verification?verified=false&email=${user.email}`)
                    }
                })
        } catch (e) {
            return res.status(500).json({ message: e.message })
        }
    }
}

module.exports = AuthController;