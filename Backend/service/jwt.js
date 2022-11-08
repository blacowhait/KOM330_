let JWT = require('jsonwebtoken');
let JWT_SECRET = process.env.JWT_SECRET

exports.signTokenToDiv = function (user) {
    if (user == null) return null;
    return JWT.sign({
        iss: 'Truends',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 5),
        privilege: "divisi"
    }, JWT_SECRET);
}
exports.signTokenToPst= function(user) {
    if (user == null) return null;
    return JWT.sign({
        iss: 'Truends',
        sub: user,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 5),
        privilege: "pusat"
    }, JWT_SECRET);
}