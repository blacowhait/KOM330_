const createError = require('http-errors')

module.exports = (schema) => {
    return (req, _res, next) => {
        const result = schema.validate(req.body);
        if (result.error) {
            next(createError(400, result.error.details[0].message));
        }
        if (!req.value) {
            req.value = {};
        }
        req.value['body'] = result.value;
        next();
    }
}