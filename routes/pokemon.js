const express = require("express");
const router = express.Router();
const {
  getPokemon,
  addpkmn,
  putpokemon,
  deletepokemon,
} = require("../controllers/pokemon");

router.get("/pokemones", getPokemon);
router.post("/addpkmn", addpkmn);
router.put("/putpokemon/:id", putpokemon);
router.delete("/deletepokemon/:id", deletepokemon);
module.exports = router;
