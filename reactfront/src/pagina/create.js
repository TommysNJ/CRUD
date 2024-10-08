import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/products/';

const CompCreate = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    // método de guardar
    const store = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        try {
            await axios.post(URI, 
                { nombre: nombre, descripcion: descripcion },
                {
                    headers: {
                        'Authorization': `Bearer ${token}` // Incluir el token en los headers
                    }
                }
            );
            navigate('/show'); // Redirigir a la página principal después de agregar el producto
        } catch (error) {
            console.error('Error al agregar el producto', error);
            alert('Hubo un error al agregar el producto. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div>
            <h3>AGREGAR PRODUCTO</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    );
}

export default CompCreate;