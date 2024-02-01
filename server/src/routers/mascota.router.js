const express= require("express")

const router = express.Router()
const controlMascota = require("../controllers/mascota.controller.js")


router.post("/api/crear", controlMascota.addMascota)
router.get("/api/allmascota", controlMascota.allMascota)
router.put("/api/editmascota/:id", controlMascota.editMascota)
router.get("/api/detallsmascota/:id", controlMascota.detailsMascota)
router.get("/api/borrar/:id", controlMascota.deleteMascota)


module.exports = router