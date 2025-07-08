import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Login from './pages/Login';
import Home from './pages/Home';
import Especialistas from './pages/Especialistas';
import Agendar from './pages/Agendar';
import Confirmacion from './pages/Confirmacion';
import Ubicacion from './pages/Ubicacion';
import Chatbot from './pages/Chatbot';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const [autenticado, setAutenticado] = useState(false);

    return (
        <>
            <Background />
            <Router>
                <Navbar autenticado={autenticado} setAutenticado={setAutenticado} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} /> {/* ✅ permite navigate('/home') */}
                        <Route path="/especialistas" element={<Especialistas />} />
                        <Route path="/ubicacion" element={<Ubicacion />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="/login" element={<Login setAutenticado={setAutenticado} />} />
                        <Route
                            path="/agendar"
                            element={
                                autenticado ? (
                                    <Agendar />
                                ) : (
                                    <>
                                        {toast.warn('🔒 Debes iniciar sesión para agendar una cita')}
                                        <Navigate to="/login" replace />
                                    </>
                                )
                            }
                        />
                        <Route path="/confirmacion" element={<Confirmacion />} />
                    </Routes>
                </div>
            </Router>
            <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} theme="light" />
        </>
    );
}

export default App;
