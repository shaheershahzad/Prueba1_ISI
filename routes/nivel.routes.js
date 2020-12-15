const express = require("express");
const router = express.Router();

const nivelController = require("../controllers/nivel.controller");

router.get("/", nivelController.getAllNiveles);
router.post("/", nivelController.createNivel);
router.put("/updatePrecio/:id", nivelController.updatePrecio);

module.exports = router;