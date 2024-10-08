import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/products/';

const CompEdit = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // método para actualizar
    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        try {
            await axios.put(`${URI}${id}`, 
                { nombre: nombre, descripcion: descripcion },
                {
                    headers: {
                        'Authorization': `Bearer ${token}` // Enviar el token en los headers
                    }
                }
            );
            navigate('/show'); // Redirigir a la página principal después de actualizar
        } catch (error) {
            console.error('Error al actualizar el producto', error);
            alert('Hubo un error al actualizar el producto. Por favor, intenta nuevamente.');
        }
    };

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        try {
            const res = await axios.get(`${URI}${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Enviar el token en los headers
                }
            });
            setNombre(res.data.nombre);
            setDescripcion(res.data.descripcion);
        } catch (error) {
            console.error('Error al obtener el producto', error);
            alert('No se pudo cargar el producto. Verifica tu autenticación.');
        }
    };

    return (
        <div>
            <h3>EDITAR PRODUCTO</h3>
            <form onSubmit={update}>
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

export default CompEdit;