const express = require("express");
const router = express.Router();
const { getPokemon } = require("../controllers/pokemon");

router.get("/", getPokemon);

module.exports = router;
