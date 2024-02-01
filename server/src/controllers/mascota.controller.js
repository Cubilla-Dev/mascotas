const { reset } = require("nodemon")
const Mascota = require("../models/mascotas.modelo.js")

const controlMascota = {
    addMascota: async (req, res) =>{
        const {nombre, tipo_de_animal, descripcion_de_amimal} = req.body
        try{
            const newMascota = new Mascota({nombre, tipo_de_animal, descripcion_de_amimal})
            await newMascota.save()
            res.status(200).json({mensaje: "Mascota agregada"})
        }catch(error){
            res.status(409).send({mensaje: "Error al crear usuario."})
        }
    },
    allMascota: async (req, res) =>{
        try{
            const newMascota = await Mascota.find()
            res.status(200).json(newMascota)
        }catch(error){
            res.status(409).send({mensaje: "Error al obtener las mascotas."})
        }
    },
    editMascota: async (req, res) => {
        const id = req.params.id;
        const { nombre, tipo_de_animal, descripcion_de_amimal } = req.body;
    
        try {
            // Utilizar findByIdAndUpdate para actualizar la mascota por su ID
            const updatedMascota = await Mascota.findByIdAndUpdate(
                id,
                { nombre, tipo_de_animal, descripcion_de_amimal },
                { new: true, runValidators: true }
            );
    
            // Verificar si la mascota existe y se actualizó correctamente
            if (updatedMascota) {
                res.status(200).json({ mensaje: "Mascota actualizada exitosamente." });
            } else {
                res.status(404).json({ mensaje: "Mascota no encontrada." });
            }
        } catch (error) {
            res.status(500).send({ mensaje: "Error al actualizar la mascota." });
        }
    },
    
}
module.exports = controlMascota 