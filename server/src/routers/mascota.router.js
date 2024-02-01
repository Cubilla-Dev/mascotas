const express= require("express")

const router = express.Router()
const controlMascota = require("../controllers/mascota.controller.js")


router.post("/api/crear", controlMascota.addMascota)
module.exports = router