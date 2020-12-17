const nivelModel = require("../models/nivel.model");
const nivelController = {};

nivelController.getAllNiveles = async (req, res) => {
    const allNiveles = await nivelModel.find();
    res.json(allNiveles);
};

nivelController.createNivel = async (req, res) => {
    try {
        const nivel = new nivelModel({
            nombre: req.body.nombre,
            precio: req.body.precio,
            nivel: req.body.nivel
        });
        let savedNivel = await nivel.save();
        res.json({
            "status":"Nivel guardado",
            "id": savedNivel._id
        });
    } catch (error) {
        console.log('err' + error);
        res.status(500).send(error);
    }
};

nivelController.updatePrecio = async (req, res) => {

    await nivelModel.findByIdAndUpdate(req.params.id, {$set: { precio : req.body.precio }});
    res.json({
        "status":"Precio updated to " + req.body.precio
    });
};

module.exports = nivelController;