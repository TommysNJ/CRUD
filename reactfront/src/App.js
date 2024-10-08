import logo from './logo.svg';
import './App.css';

// Importación de componentes 
import CompShow from './pagina/show';
import CompCreate from './pagina/create';
import CompEdit from './pagina/edit';
import CompRegister from './pagina/register';
import CompLogin from './pagina/login';

// Importación de router
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Componente para proteger rutas
const RutaProtegida = ({ children }) => {
  const token = localStorage.getItem('token'); // Obtener token desde localStorage

  // Si no hay token, redirigir al login
  return token ? children : <Navigate to="/login" />;
}

function App() {
  const token = localStorage.getItem('token'); // Obtener token desde localStorage

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {/* Si el usuario ya está logueado, redirigir a /show, de lo contrario al login */}
          <Route path="/" element={token ? <Navigate to="/show" /> : <Navigate to="/login" />} />

          {/* Rutas protegidas */}
          <Route path="/show" element={<RutaProtegida><CompShow /></RutaProtegida>} />
          <Route path="/create" element={<RutaProtegida><CompCreate /></RutaProtegida>} />
          <Route path="/edit/:id" element={<RutaProtegida><CompEdit /></RutaProtegida>} />

          {/* Rutas de login y registro */}
          <Route path="/login" element={<CompLogin />} />
          <Route path="/register" element={<CompRegister />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;