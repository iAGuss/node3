const { STATUS_CODES } = require("http");
const listaPokemon = require("../models/listaPokemon");

exports.getPokemon = (req, res) => {
  const {
    Object,
    name,
    number,
    types,
    minhp,
    hp,
    maxhp,
    minatk,
    atk,
    maxatk,
    mindef,
    def,
    maxdef,
  } = req.query;
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
  //Barra buscador con hp
  if (minhp) {
    pokemon = pokemon.filter((pk) => pk.stats.hp >= minhp);
  }
  if (hp) {
    pokemon = pokemon.filter((pk) => pk.stats.hp == hp);
  }
  if (maxhp) {
    pokemon = pokemon.filter((pk) => pk.stats.hp <= maxhp);
  }

  //Barra buscador con atk
  if (minatk) {
    pokemon = pokemon.filter((pk) => pk.stats.atk >= minatk);
  }
  if (atk) {
    pokemon = pokemon.filter((pk) => pk.stats.atk == atk);
  }
  if (maxatk) {
    pokemon = pokemon.filter((pk) => pk.stats.atk <= maxatk);
  }

  if (mindef) {
    pokemon = pokemon.filter((pk) => pk.stats.def <= mindef);
  }
  if (def) {
    pokemon = pokemon.filter((pk) => pk.stats.def == def);
  }
  if (maxdef) {
    pokemon = pokemon.filter((pk) => pk.stats.def <= maxdef);
  }

  res.send(pokemon);
};

//POST
exports.addpkmn = (req, res) => {
  const pokemon = req.body;
  listaPokemon.push(pokemon);
  res.send("Pokemon agregado: ");
};

//PUT
exports.putpokemon = (req, res) => {
  const pokemon = req.body;
  const { id } = req.params;
  const indiceAcualizar = listaPokemon.findIndex((pk) => pk.number == id);
  const pokemonProp = Object.keys(pokemon);
  pokemonProp.forEach((key) => {
    if (listaPokemon[indiceAcualizar][key] === pokemon[key]) {
      res.sendStatus(304);
      return;
    }
  });
  const poku = { ...listaPokemon[indiceAcualizar], ...pokemon };
  listaPokemon[indiceAcualizar] = poku;
  console.log(listaPokemon);
  res.sendStatus(204);
};

//DELETE
exports.deletepokemon = (req, res) => {
  const { id } = req.params;

  const borrarpokemon = listaPokemon.findIndex(
    (pokemon) => pokemon.number == id
  );
  listaPokemon.splice(borrarpokemon, 1);

  res.sendStatus(204);
};
