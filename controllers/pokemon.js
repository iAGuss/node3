const { STATUS_CODES } = require("http");
const listaPokemon = require("../models/listaPokemon");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const { publicDecrypt } = require("crypto");
const pool = new Pool({
  user: "postgres",
  database: "Pokemones",
  password: "1234",
});

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

exports.deletepokemon = (req, res) => {
  const { id } = req.params;

  const borrarpokemon = listaPokemon.findIndex(
    (pokemon) => pokemon.number == id
  );
  listaPokemon.splice(borrarpokemon, 1);

  res.sendStatus(200);
};

exports.pruebapgadmin = (req, res) => {
  pool.query("SELECT * from public.prueba", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows[0]);
  });
};

exports.insertUser = async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  try {
    pool.query(
      "INSERT INTO public.usuario (mail, password,name ) VALUES ($1, $2, $3)",
      [req.body.mail, password, req.body.name]
    );
    res.send("usuario creado correctamente");
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = pool.query("SELECT * FROM public.usuario WHERE mail=$1)", [
      req.body.mail,
    ]);
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    console.log(user[0]);
    const validPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" });
    }
    return res.status(200).json({ error: null, data: "login ok", token });
  } catch (error) {
    res.status(400).send(error);
  }
};
// select *from public.usuario where mail= $1 ""
// [req.body.mail]
