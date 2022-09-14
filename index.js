require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Mensaje recibido')
})//End Point

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto', process.env.PORT)
}) 