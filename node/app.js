import express from "express"
import cors from 'cors'

// importación de la conexión a la base de datos
import db from "./database/db.js"
//importación del enrutador
import productRoutes from './routes/routes.js'
import authRoutes from './routes/authRoutes.js'
import { verifyToken } from './middleware/auth.js'

const app = express()

app.use (cors())
app.use(express.json())

// Rutas para autenticación
app.use('/auth', authRoutes); // Rutas para registro y login
app.use('/products', verifyToken, productRoutes); // Aplica el middleware de verificación

try {
    await db.authenticate()
    console.log('Conexión exitosa con la base de datos')
} catch (error) {
    console.log('El error de conexión es: ${error}')
}

/*
app.get('/', (req, res) => {
    res.send('SI VALE')
})
*/

app.listen(8000, () =>{
    console.log('Server UP running in http://localhost:8000/')
})