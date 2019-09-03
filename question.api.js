// make one endpoint: GET /questions will return 10 random questions to the front end
"use strict"
const express = require("express");
const router = express.Router();
const pool = require("./connection");


function selectAllQuestions(req, res) {
  pool.query("select * from questions limit 10").then(result => {
    res.send(result.rows);
  }).catch(e => console.log(e));
}

router.get("/questions", selectAllQuestions);


module.exports = router;