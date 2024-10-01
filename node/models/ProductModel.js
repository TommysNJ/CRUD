// importación de la conexión a la base de datos
import db from "../database/db.js";
// importación de sequelize
import { DataTypes } from "sequelize";

const ProductModel = db.define('productos', {
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
}, {
    timestamps: false // Esto desactiva las columnas `createdAt` y `updatedAt`
  });

export default ProductModel