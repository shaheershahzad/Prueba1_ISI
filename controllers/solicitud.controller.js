const solicitudModel = require("../models/solicitud.model");
const solicitudController = {};

solicitudController.getAllSolicitudes = async (req, res) => {
    const allSolicitudes = await solicitudModel.find();
    res.json(allSolicitudes);
};

solicitudController.getSolicitudesPendientes = async (req, res) => {
    const solicitudesPendientes = await solicitudModel.find({"estado": "pendiente"});
    res.json(solicitudesPendientes);
};

solicitudController.createSolicitud = async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    try {
        const solicitud = new solicitudModel({
            descripcionEquipo: req.body.descripcion,
            resumenCV: req.body.resumen,
            dniFotografo: req.body.dniFotografo
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

    await solicitudModel.findByIdAndUpdate(req.body.id, {$set: { estado : req.body.estado }});
    res.json({
        "status":"Estado updated to " + req.body.estado
    });
};

module.exports = solicitudController;