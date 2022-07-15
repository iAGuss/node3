const express = require("express");
const router = express.Router();
const {
  getPokemon,
  addpkmn,
  putpokemon,
  deletepokemon,
} = require("../controllers/pokemon");
const { verifyToken } = require("../controllers/validar");

router.get("/pokemones", getPokemon);
router.post("/addpkmn", verifyToken, addpkmn);
router.put("/putpokemon/:id", verifyToken, putpokemon);
router.delete("/deletepokemon/:id", verifyToken, deletepokemon);
module.exports = router;
