import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background'; // ✅ fondo integrado
import Login from './pages/Login';
import Home from './pages/Home';
import Especialistas from './pages/Especialistas';
import Agendar from './pages/Agendar';
import Confirmacion from './pages/Confirmacion';
import Ubicacion from './pages/Ubicacion';
import Chatbot from './pages/Chatbot';
import { useState } from 'react';

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <>
      <Background /> {/* ✅ Capa de fondo borrosa */}
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Login setAutenticado={setAutenticado} />} />
            {autenticado && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/especialistas" element={<Especialistas />} />
                <Route path="/agendar" element={<Agendar />} />
                <Route path="/confirmacion" element={<Confirmacion />} />
                <Route path="/ubicacion" element={<Ubicacion />} />
                <Route path="/chatbot" element={<Chatbot />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
