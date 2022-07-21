const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken, TOKEN_SECRET } = require("../controllers/validar");
const router = express.Router();

const usuarios = [
  {
    name: "Gus",
    mail: "gustavodario2001@gmail.com",
    password: "$2b$10$wZYa2xA./kKJpxFsWSgv4u8Wzz/Hn/El02XnFyAuukg1mfG.RHWTG",
  },
];

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const newUser = {
    name: req.body.name,
    mail: req.body.mail,
    password: password,
  };
  usuarios.push(newUser);
  return res.json({ succes: true, newUser, usuarios });
});
// En routes/auth.js
router.post("/login", async (req, res) => {
  // Buscamos el usuario con el mismo mail
  const user = usuarios.find((u) => u.mail === req.body.mail);
  if (!user) {
    return res.status(400).json({ error: "Usuario no encontrados" });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Contraseña no válida" });
  }
  // Crear el token
  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    TOKEN_SECRET
  );
  res.json({ error: null, data: "Login exitoso", token });
});
module.exports = router;
// exports.insertUser = async (req, res) => {
//   console.log(req.body);
//   const salt = await bcrypt.genSalt(10);
//   const password = await bcrypt.hash(req.body.password, salt);

//   try {
//     pool.query(
//       "INSERT INTO public.usuario (mail, password,name ) VALUES ($1, $2, $3)",
//       [req.body.mail, password, req.body.name]
//     );
//     res.send("usuario creado correctamente");
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// exports.loginUser = async (req, res) => {
//   try {
//     const user = pool.query("SELECT * FROM public.usuario WHERE mail=$1)", [
//       req.body.mail,
//     ]);
//     if (!user) {
//       return res.status(400).json({ error: "Usuario no encontrado" });
//     }
//     console.log(user[0]);
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user[0].password
//     );
//     if (!validPassword) {
//       return res.status(400).json({ error: "Contraseña no válida" });
//     }
//     return res.status(200).json({ error: null, data: "login ok", token });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };
