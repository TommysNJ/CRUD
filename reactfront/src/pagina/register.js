import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/auth/register'; // URL del backend para registrar

const CompRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(''); // Para manejar errores

    const register = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URI, { email, password });
            
            if (res.status === 200) { // Si el registro es exitoso
                alert('Registro exitoso, puedes iniciar sesión.');
                navigate('/login'); // Redirigir a la página de login
            } else {
                throw new Error('Error en el registro');
            }
        } catch (error) {
            console.error('Error al registrar:', error);
            setError('Error al registrar, por favor verifica los datos.');
        }
    };

    return (
        <div>
            <h3>REGISTRARSE</h3>
            <form onSubmit={register}>
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
                <button type='submit' className='btn btn-primary'>Registrar</button>
            </form>
        </div>
    );
};

export default CompRegister;