const { default: mongoose } = require("mongoose");

const MONGO_URI = "mongo://...";

const _errorHandler = (err) => err.code === 300 && undefined;

const migration = () => {};

const connect = async () => {
    await mongoose.connect(MONGO_URI);
    _errorHandler()
};

module.exports = connect;
