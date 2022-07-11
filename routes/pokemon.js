const express = require("express");
const router = express.Router();
const {
  getPokemon,
  getPokemonByName,
//   getPokemonByNumero,
} = require("../controllers/pokemon");

router.get("/pokemon/getPokemon", getPokemon);
router.get("/pokemon/:nombre", getPokemonByName);
// router.get("/pokemon/:numero", getPokemonByNumero);
module.exports = router;
