const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const nivelSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    nivel: {
        type: Number,
        required: true,
        trim: true
    }
},
{
    timestamps: true
});

const nivelModel = mongoose.model("Nivel", nivelSchema);
module.exports = nivelModel;