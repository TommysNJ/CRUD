import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const URI = 'http://localhost:8000/auth/login'; // URL del backend para login

const CompLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(''); // Para manejar errores

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URI, { email, password });
            
            if (res.status === 200 && res.data.token) {
                localStorage.setItem('token', res.data.token); // Guardar el token en localStorage
                navigate('/show'); // Redirigir a la página de productos (show.js)
            } else {
                throw new Error('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Error al iniciar sesión, credenciales inválidas.');
        }
    };

    return (
        <div>
            <h3>INICIAR SESIÓN</h3>
            <form onSubmit={login}>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className='form-control'
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si lo hay */}
                <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
            </form>
            <div className='mt-3'>
                <p>¿No tienes cuenta?</p>
                <Link to="/register" className='btn btn-secondary'>Registrarse</Link>
            </div>
        </div>
    );
};

export default CompLogin;