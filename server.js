const express = require("express");
const app = express();
const PORT = 3000;

//Rutas
//Solicitud
const solicitudRoutes = require("./routes/solicitud.routes");
//Fotografo
const fotografoRoutes = require("./routes/fotografo.routes");

// Settings -> Configuración del servidor
const morgan = require("morgan");
const cors = require("cors");

// Middlewares -> Funciones para tratar los datos
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Arrancar mongo
const DB = require("./config/database");
DB();

//Manejador de rutas
const router = express.Router();

app.get("/", (req, res) => res.send("Server marcianos!"));

//Usar rutas
app.use(router);
app.use('/api/solicitud', solicitudRoutes);
app.use('/api/fotografo', fotografoRoutes);

app.listen(PORT, () => console.log("Server on port 3000"));