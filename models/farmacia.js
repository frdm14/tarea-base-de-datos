const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema ({
    categoria: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    laboratorio:{
        type: String,
        required: true
    },
    comprimidos:{
        type: Number,
        require: true
    },
    precio:{
        type: Number,
    },
    obraSocial:{
        type: Boolean,
        require: true
    },
    receta:{
        type: Boolean,
        require: true
    }
})

const Farmacia = mongoose.model("Farmacia", schema)
module.exports = {Farmacia}