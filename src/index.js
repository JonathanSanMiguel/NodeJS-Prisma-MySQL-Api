import express from 'express';
import productosRoutes from './Routes/productos.routes.js';
import marcasRoutes from './Routes/marcas.routes.js'


const app = express()

app.use(express.json())

app.use('/inshka', productosRoutes)
app.use('/inshka', marcasRoutes)


app.listen(3000, () => {
    console.log('Servidor En El Puerto 3000')
})