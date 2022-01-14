import Inicio from "./componentes/Inicio";
import CanchaProvider from "./store/canchaContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from "./componentes/Contacto/Contacto";
import Navbar from "./componentes/Navbar";
import Futbol from "./componentes/Futbol";
import Tenis from "./componentes/Tenis";
import Voley from "./componentes/Voley";
import Footer from "./componentes/Footer";





function App() {
  return (
    <CanchaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/futbol" element={<Futbol />} />
          <Route path="/tenis" element={<Tenis />} />
          <Route path="/voley" element={<Voley />} />

        </Routes>
        <Footer />
      </Router>
    </CanchaProvider>
  );
}

export default App;
