const fotografoModel = require("../models/fotografo.model");
const fotografoController = {};

fotografoController.getAllFotografos = async (req, res) => {
    const allFotografos = await fotografoModel.find();
    res.json(allFotografos);
};

fotografoController.createFotografo = async (req, res) => {
    try {
        const fotografo = new fotografoModel({
            dni: req.body.dni,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            codigoPostal: req.body.codigoPostal,
            telefono: req.body.telefono
        });
        let savedFotografo = await fotografo.save();
        res.json({
            "status":"Fotografo guardado",
            "id": savedFotografo._id
        });
    } catch (error) {
        console.log('err' + error);
        res.status(500).send(error);
    }
};

module.exports = fotografoController;