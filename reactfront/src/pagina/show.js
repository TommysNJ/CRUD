import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/products/'

const CompShow = () => {
    const [products, setProduct] = useState([])
    useEffect(()=>{
        getProducts()
    }, [])

    // método para mostrar todos los productos
    const getProducts = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    // método para eliminar un producto 
    const deleteProduct = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProducts()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-info'><i className="fa-regular fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShow