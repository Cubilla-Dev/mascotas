const mongoose= require("mongoose")


const mascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: [true,"Nombre es requerido."],
        
    },
    tipo_de_animal: {
        type: String,
        require: [true,"El tipo de animal es requerido."],

    },
    descripcion_de_amimal: {
        type: String,
        require: [true,"La descripción del animal es requerida."],

    },
})

const Mascota = mongoose.model("Mascota", mascotaSchema)
module.exports = Mascota