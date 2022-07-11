const listaPokemon = require("../models/listaPokemon");

exports.getPokemon = (req, res) => {
  const { name, number, types } = req.query;
  let pokemon = listaPokemon;
  if (name) {
    pokemon = pokemon.find(
      (pk) => pk.name.toLowerCase() === name.toLowerCase()
    );
  }
  if (number) {
    pokemon = pokemon.find((pk) => pk.number === number);
  }


  if (types) {
    const [type1, type2] = types.split(",");
    if (type1) {
      pokemon = pokemon.filter(
        (pk) => pk.types[0] === type1 || pk.types[1] === type1
      );
    }
    if (type2) {
      pokemon = pokemon.filter(
        (pk) => pk.types[1] === type2 || pk.types[0] === type2
      );
    }
  }

  

  res.send(pokemon);
};
