const express= require("express")

const router = express.Router()
const controlMascota = require("../controllers/mascota.controller.js")


router.post("/api/crear", controlMascota.addMascota)
router.get("/api/allmascota", controlMascota.allMascota)
router.post("/api/editmascota/:id", controlMascota.editMascota)
router.get("/api/detallsmascota/:id", controlMascota.detailsMascota)

module.exports = router