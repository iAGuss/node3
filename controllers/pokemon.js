const listaPokemon = require("../models/listaPokemon");

exports.getPokemon = (req, res) => {
  res.send(listaPokemon);
};

exports.getPokemonByName = (req, res) => {
  const { nombre } = req.params;

  const poke = listaPokemon.find(
    (pk) => pk.name.toLowerCase() === nombre.toLowerCase()
  );
  res.send(poke);
};
