const express = require("express");
const router = express.Router();

const fotografoController = require("../controllers/fotografo.controller");

router.get("/", fotografoController.getAllFotografos);
router.post("/", fotografoController.createFotografo);

module.exports = router;