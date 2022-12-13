var express = require("express");
var router = express.Router();
var sql = require("../src/db.js");
var cors = require("cors");

router.use(cors());

/* insert user */
router.post("/", async function (req, res, next) {
  const insertUser = await sql`
    insert into users(firstname, lastname, created_on)
    values (${req.body.firstname}, ${req.body.lastname}, ${Date.now()})
    returning *;
  `;

  res.send(insertUser);
});

module.exports = router;
