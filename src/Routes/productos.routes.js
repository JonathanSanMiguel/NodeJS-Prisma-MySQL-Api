import { Router } from 'express';
import {
  getAllProducts,
  getOneProduct,
  postNewProduct,
  deleteProduct
} from '../Controllers/productos.controller.js';


const router = Router()

router.get('/products', getAllProducts)

router.get('/oneProduct/:id', getOneProduct)

router.post('/addProduct', postNewProduct)

router.delete('/deleteOne/:id', deleteProduct)

export default router