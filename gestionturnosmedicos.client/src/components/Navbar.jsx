import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro translúcido
        padding: '10px 0',
        textAlign: 'center',
        backdropFilter: 'blur(6px)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <Link style={{ margin: '0 15px', color: '#f2f2f2', fontWeight: 'bold', textDecoration: 'none' }} to="/home">Inicio</Link>
      <Link style={{ margin: '0 15px', color: '#f2f2f2', fontWeight: 'bold', textDecoration: 'none' }} to="/especialistas">Especialistas</Link>
      <Link style={{ margin: '0 15px', color: '#f2f2f2', fontWeight: 'bold', textDecoration: 'none' }} to="/agendar">Agendar Cita</Link>
      <Link style={{ margin: '0 15px', color: '#f2f2f2', fontWeight: 'bold', textDecoration: 'none' }} to="/ubicacion">Ubicación</Link>
      <Link style={{ margin: '0 15px', color: '#f2f2f2', fontWeight: 'bold', textDecoration: 'none' }} to="/chatbot">Chatbot</Link>
    </nav>
  );
}
