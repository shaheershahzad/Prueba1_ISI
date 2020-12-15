const solicitudModel = require("../models/solicitud.model");
const solicitudController = {};

solicitudController.getAllSolicitudes = async (req, res) => {
    const allSolicitudes = await solicitudModel.find();
    res.json(allSolicitudes);
};

solicitudController.createSolicitud = async (req, res) => {
    try {
        const solicitud = new solicitudModel({
            descripcionEquipo: req.body.descripcion,
            resumenCV: req.body.resumen
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

solicitudController.updateEstado = async (req, res) => {

    await solicitudModel.findByIdAndUpdate(req.params.id, {$set: { estado : req.body.estado }});
    res.json({
        "status":"Estado updated to " + req.body.estado
    });
};

module.exports = solicitudController;