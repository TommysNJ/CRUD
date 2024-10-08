import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompLogout from './logout';

const URI = 'http://localhost:8000/products/';

const CompShow = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    // Método para mostrar todos los productos
    const getProducts = async () => {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        try {
            const res = await axios.get(URI, {
                headers: {
                    'Authorization': `Bearer ${token}` // Enviar el token en los headers
                }
            });
            setProduct(res.data);
        } catch (error) {
            console.error('Error al obtener los productos', error);
            alert('No se pudo obtener la lista de productos. Verifica tu autenticación.');
        }
    };

    // Método para eliminar un producto
    const deleteProduct = async (id) => {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        try {
            await axios.delete(`${URI}${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}` // Enviar el token en los headers
                }
            });
            getProducts(); // Actualizar la lista de productos después de eliminar
        } catch (error) {
            console.error('Error al eliminar el producto', error);
            alert('No se pudo eliminar el producto. Verifica tu autenticación.');
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <CompLogout /> 
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>
                        <i className="fa-solid fa-plus"></i>
                    </Link>
                    <h1>LISTA DE PRODUCTOS</h1>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-info'>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                        <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShow;