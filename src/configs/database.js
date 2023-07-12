const {
    DB_HOSTNAME,
	DB_USERNAME,
	DB_PASSWORD,
	DB_NAME,
	DB_PORT,
} = require('../helpers/env')
const { Pool } = require('pg');
const db = new Pool({
	host: DB_HOSTNAME,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME,
	port: DB_PORT,
});
db.connect((err) => {
	if (err) {
		console.log(err);
	}
});
module.exports = db;