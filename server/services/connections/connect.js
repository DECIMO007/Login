const config = require("./config")
const pgPromise = require("pg-promise")();
const connectString = config.db_access
const db = pgPromise(connectString)

module.exports = db;