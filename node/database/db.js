import { Sequelize } from "sequelize";

const db = new Sequelize('productos_app', 'root', 'Bt0mmyDS', {
    host:'localhost',
    dialect:'mysql'
})

export default db