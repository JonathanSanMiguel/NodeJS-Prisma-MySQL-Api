import express from 'express';
import morgan from 'morgan';
import productosRoutes from './Routes/productos.routes.js';


const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/prisma', productosRoutes)


app.listen(3000, () => {
    console.log('Servidor En El Puerto 3000')
})