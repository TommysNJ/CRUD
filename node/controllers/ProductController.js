// importación del modelo creado
import ProductModel from "../models/ProductModel.js";

// DEFINICIÓN DE MÉTODOS CRUD

// Mostrar todos los productos 
export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar un producto
export const getProducto = async (req, res) => {
    try {
        const product = await ProductModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(product[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProducto = async (req, res) => {
    try {
        await ProductModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Actualizar un producto 
export const updateProducto = async (req, res) => {
    try {
        await ProductModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Eliminar un producto 
export const deleteProducto = async (req, res) => {
    try {
        ProductModel.destroy({
            where: {id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message}) 
    }
}