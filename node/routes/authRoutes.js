import express from 'express';
import { registerUser, loginUser } from '../controllers/UserController.js';

const router = express.Router();

// Ruta para registrar usuarios
router.post('/register', registerUser);

// Ruta para hacer login
router.post('/login', loginUser);

export default router