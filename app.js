//iniciar servidor express
const express = require('express');
const app = express();
const port = 3030;


//iniciar servidor
app.listen(port, () => {
    console.log( `Servidor iniciado en puerto ${port}` );
});

//rutas
app.get('/', (req, res) => {
    res.send('Hello World');
});



