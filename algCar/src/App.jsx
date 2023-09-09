import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import {ListarVeiculos} from './pages/Listar/ListarVeiculos.jsx';
import {AdicionarVeiculos} from './pages/Adicionar/AdicionarVeiculos.jsx';
import {EditarVeiculos} from './pages/Editar/EditarVeiculos.jsx';
import {Home} from './pages/Home/Home.jsx';

function App() {

  return (
      <Router>
        <Navbar />
    

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/listar' element={<ListarVeiculos />} />
            <Route path='/add' element={<AdicionarVeiculos />} />
            <Route path="/edit/:index" element={<EditarVeiculos />} />
          </Routes>


        <Footer />
      </Router>
  )
}

export default App
