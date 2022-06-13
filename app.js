//iniciar servidor express
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;



//rutas
//app.get('/', (req, res) => {res.send('Hello World');});
//app.get('/', (req, res) => {res.sendFile(__dirname + '/views/home.html');});
app.get('/', (req, res) => {res.sendFile( path.join(__dirname, 'views', 'home.html'));});
app.get('/login', (req, res) => {res.sendFile( path.join(__dirname, 'views', 'login.html'));});
app.get('/register', (req, res) => {res.sendFile( path.join(__dirname, 'views', 'register.html'));});






//iniciar servidor
app.listen(port, () => {
    console.log( `Servidor iniciado en puerto ${port}` );
});




