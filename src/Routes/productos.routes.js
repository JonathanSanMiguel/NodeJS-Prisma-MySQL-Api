import { Router } from 'express';
import {
    getAllProducts,
    postNewProduct
} from '../Controllers/productos.controller.js';


const router = Router()


router.get('/products', getAllProducts)

router.post('/addProduct', postNewProduct)


export default router