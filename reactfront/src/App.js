import logo from './logo.svg';
import './App.css';



// importación de componentes 
import CompShow from './pagina/show';
import CompCreate from './pagina/create';
import CompEdit from './pagina/edit';

// importación de router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShow/>}></Route>
          <Route path='/create' element={<CompCreate/>}></Route>
          <Route path='/edit/:id' element={<CompEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
