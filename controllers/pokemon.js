const listaPokemon = require("../models/listaPokemon");

exports.getPokemon = (req, res) => {
  const { name, number } = req.query;
  let pokemon = listaPokemon;
  if (name) {
    pokemon = pokemon.find(
      (pk) => pk.name.toLowerCase() === name.toLowerCase()
    );
  }
  if (number) {
    pokemon = pokemon.find((pk) => pk.number === number);
  }
  // if (types) {
  //   pokemon = pokemon.find((pk) => pk.types === types);
  // }

  res.send(pokemon);
};
