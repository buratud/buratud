exports.ENV = process.env.NODE_ENV;
exports.BASE_PATH = exports.ENV === "production" ? "/buratud" : "";