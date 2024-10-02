import axios from "axios";
import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/products/'

const CompEdit = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    // método para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre:nombre,
            descripcion:descripcion
        })
        navigate('/')
    }
    useEffect(()=>{
        getProductById()
    },[])

    const getProductById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion)
    }

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
            <label className='form-label'>Descripcion</label>
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
    )
}

export default CompEdit