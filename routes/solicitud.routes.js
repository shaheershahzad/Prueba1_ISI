const express = require("express");
const router = express.Router();

const solicitudController = require("../controllers/solicitud.controller");

router.get("/", solicitudController.getAllSolicitudes);
router.get("/pending", solicitudController.getSolicitudesPendientes);
router.post("/", solicitudController.createSolicitud);
router.put("/updateEstado/:id", solicitudController.updateEstado);

module.exports = router;