//declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.Port || 3000;
//
//configuraciones
/*
app.get== seleccionamos un recurso del servidor

app.post= creamos un recurso del servidor

app.delete= Eliminamos un recurso del servidor

app.put= Aplicaos un recurso del servidor
*/
app.get("/", (req, res) => {
    res.send('Pagina principal. Servidor en Node.js con expres');
})
app.get('*', (req, res) => {
    res.send('Error 404 | Pagina no encontrada');
})

//procesos

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: http://localhost:${port}', port);
})