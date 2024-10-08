import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Método para registrar un nuevo usuario
export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await UserModel.create({ email, password: hashedPassword });
        res.json({ message: "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Método para iniciar sesión
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findByPk(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email }, 'secret_key', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: "Credenciales inválidas" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};