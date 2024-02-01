const mongoose = require('mongoose');



mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:/Mascotas', {
    useNewUrlParser: true,

    useUnifiedTopology: true,
})
    .then(()=> console.log('Conexioón exitosa con la DB'))
    .catch(err => console.log('Ocurrió un error en la conexión de la base de datos'))
