import { Router } from 'express';
import {
  getAllProducts,
  getOneProduct,
  postNewProduct
} from '../Controllers/productos.controller.js';


const router = Router()

router.get('/products', getAllProducts)

router.get('/oneProduct/:id', getOneProduct)

router.post('/addProduct', postNewProduct)


export default router