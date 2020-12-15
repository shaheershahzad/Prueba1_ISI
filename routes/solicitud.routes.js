const express = require("express");
const router = express.Router();

const solicitudController = require("../controllers/solicitud.controller");

router.post("/", solicitudController.createSolicitud);

module.exports = router;