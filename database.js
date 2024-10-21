const MONGO_URI = "mongo://...";

const _errorHandler = (err) => err.code === 300 && undefined;

const migration = () => {};