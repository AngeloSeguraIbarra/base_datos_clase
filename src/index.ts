import { config } from "dotenv";
import express from "express";
// PARA PODER ACCEDER A LAS VARIABLES DEL AMBIENTE (.env)
config();
const app = express();
app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando Puerto " + process.env.SERVER_PORT);
});
