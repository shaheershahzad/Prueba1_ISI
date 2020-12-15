const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const solicitudSchema = new Schema({
    descripcionEquipo: {
        type: String,
        required: true,
        trim: true
    },
    resumenCV: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true,
        default: "pendiente"
    }
},
{
    timestamps: true
});

const solicitudModel = mongoose.model("Solicitud", solicitudSchema);
module.exports = solicitudModel;