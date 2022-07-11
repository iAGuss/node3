const express = require("express");
const pokemonruta = require("./routes/pokemon");

const app = express();
const PORT = 4000;

app.use("/", pokemonruta);

app.listen(PORT, () =>
  console.log(`Server listening in http://localhost:${PORT}`)
);