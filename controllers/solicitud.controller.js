const solicitudModel = require("../models/solicitud.model");
const solicitudController = {};

solicitudController.getAllSolicitudes = async (req, res) => {
    const allSolicitudes = await solicitudModel.find();
    res.json(allSolicitudes);
};

solicitudController.createSolicitud = async (req, res) => {
    //console.log(req.body);
    try {
        const solicitud = new solicitudModel({
            descripcionEquipo: req.body.descripcion,
            resumenCV: req.body.resumen,
            estado: req.body.estado
        });
        let savedSolicitud = await solicitud.save();
        res.json({
            "status":"Solicitud guardada",
            "id": savedSolicitud._id
        });
    } catch (error) {
        console.log('err' + error);
        res.status(500).send(error);
    }
};

module.exports = solicitudController;