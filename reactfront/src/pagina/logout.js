import { useNavigate } from 'react-router-dom';

const CompLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
        navigate('/login'); 
    }

    return (
        <button onClick={handleLogout} className="btn btn-danger">
            Cerrar Sesión
        </button>
    );
}

export default CompLogout;