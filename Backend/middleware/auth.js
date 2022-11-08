const UserModel = require('../model/user');
const createError = require('http-errors')
let JWT = require('jsonwebtoken');
let JWT_SECRET = process.env.JWT_SECRET

class JWtController {
    static checkToken(req, res, next) {
        try {
            let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase      
            if (token) {
                if (token.startsWith('Bearer ')) {
                    token = token.slice(7, token.length);
                }
                JWT.verify(token, JWT_SECRET, async (err, decoded) => {
                    if (err) {
                        return res.status(401).json({ message: 'Auth token is invalid' });
                    } else if (decoded.privilege == 'admin') {
                        req.decoded = decoded;
                    } else {
                        const user = await UserModel.findById(decoded.sub)
                        if (!user)
                            return res.status(401).json({ message: 'Auth token is invalid' });
                        req.decoded = decoded;
                    }
                    next();
                });
            } else {
                return res.status(401).json({ message: 'Auth token is not supplied' });
            }
        } catch (err) {
            if (err.name == 'JsonWebTokenError') {
                return next(createError(400, err))
            }
            if (err.name == 'NotBeforeError') {
                return next(createError(400, err))
            }
            if (err.name == 'TokenExpiredError') {
                return next(createError(403, err))
            }
            next(createError(err))
        }
    }
    static isDiv(req, res, next) {
        let { privilege } = req.decoded;
        if (privilege === "divisi") next();
        else return res.status(403).json({ message: "You do not have access to this resource" });
    }
    static isPst(req, res, next) {
        let { privilege } = req.decoded;
        if (privilege === "pusat") next();
        else return res.status(403).json({ message: "You do not have access to this resource" });
    }
}

module.exports = JWtController;