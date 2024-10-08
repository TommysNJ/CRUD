import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    email: { 
        type: DataTypes.STRING, 
        primaryKey: true 
    },
    password: { 
        type: DataTypes.STRING 
    },
}, {
    timestamps: false // Esto desactiva las columnas `createdAt` y `updatedAt`
});

export default UserModel;