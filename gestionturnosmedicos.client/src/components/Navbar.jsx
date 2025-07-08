import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Navbar({ autenticado, setAutenticado }) {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem('usuarioRegistrado');
        setAutenticado(false); // ✅ actualiza el estado global
        toast.success('Sesión cerrada correctamente');
        navigate('/'); // ✅ redirige directamente al inicio
    };

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: '#eeeeee'
        }}>
            <div>
                <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
                <Link to="/especialistas" style={{ marginRight: '15px' }}>Especialistas</Link>
                <Link to="/agendar" style={{ marginRight: '15px' }}>Agendar</Link>
                <Link to="/ubicacion" style={{ marginRight: '15px' }}>Ubicación</Link>
                <Link to="/chatbot">Chatbot</Link>
            </div>
            <div>
                {autenticado ? (
                    <button
                        onClick={cerrarSesion}
                        style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
                    >
                        Cerrar sesión
                    </button>
                ) : (
                    <Link to="/login">Iniciar sesión</Link>
                )}
            </div>
        </nav>
    );
}
