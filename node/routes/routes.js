import express from 'express'
import { createProducto, deleteProducto, getAllProducts, getProducto, updateProducto } from '../controllers/ProductController.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProducto)
router.post('/', createProducto)
router.put('/:id', updateProducto)
router.delete('/:id', deleteProducto)

export default router