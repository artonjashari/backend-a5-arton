var postgres = require("postgres");
require("dotenv").config();

const sql = postgres(
  `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

module.exports = sql;
