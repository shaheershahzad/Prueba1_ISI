const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const fotografoSchema = new Schema({
    dni: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    codigoPostal: {
        type: Number,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    }
},
{
    timestamps: true
});

const fotografoModel = mongoose.model("Fotografo", fotografoSchema);
module.exports = fotografoModel;