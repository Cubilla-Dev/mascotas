const express = require("express")
const app = express()
require('./configuraciondemongo')
app.use(express.json())
const cors = require("cors")
const corsOptions = {
    origin:  'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
const router= require("./src/routers/mascota.router")

app.use(router)
app.listen(3000, () =>{console.log("server en linea")})


