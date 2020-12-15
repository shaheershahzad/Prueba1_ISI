const express = require("express");
const app = express();
const PORT = 3000;

// Settings -> Configuración del servidor
const morgan = require("morgan");
const cors = require("cors");

// Middlewares -> Funciones para tratar los datos
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Arrancar mongo
/*const DB = require("./config/database");
DB();*/

//Manejador de rutas
const router = express.Router();

app.get("/", (req, res) => res.send("Server marcianos!"));

app.listen(PORT, () => console.log("Server on port 3000"));