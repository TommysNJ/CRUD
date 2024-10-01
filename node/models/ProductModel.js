// importación de la conexión a la base de datos
import db from "../database/db";
// importación de sequelize
import { DataTypes } from "sequelize";

const ProductModel = db.define('productos', {
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
})

export default ProductModel