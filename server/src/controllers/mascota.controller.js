const { reset } = require("nodemon")
const Mascota = require("../models/mascotas.modelo.js")

const controlMascota = {
    addMascota: async (req, res) =>{
        const {nombre, tipo_de_animal, descripcion_de_amimal} = req.body
        try{
            const newMascota = new Mascota({nombre, tipo_de_animal, descripcion_de_amimal})
            await newMascota.save()
            res.status(200).json({mensaje: "Usuario creado."})
        }catch(error){
            res.status(409).send({mensaje: "Error al crear usuario."})
        }
    }
}
module.exports = controlMascota 