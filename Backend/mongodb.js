const { connect } = require("mongoose")

const mongoServer = process.env.MONGODB_URI;
exports.dbConnect = () => {
    connect(mongoServer, {
        useNewUrlParser: true,
        autoIndex: false,
        useUnifiedTopology: true,
    });
}