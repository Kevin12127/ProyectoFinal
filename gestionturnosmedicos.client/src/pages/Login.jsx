import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login({ setAutenticado }) {
    const [modo, setModo] = useState('login');
    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        contrasena: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const guardarUsuario = () => {
        localStorage.setItem('usuarioRegistrado', JSON.stringify(form));
        toast.success('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
        setModo('login');
        setForm({ nombre: '', correo: '', contrasena: '' });
    };

    const iniciarSesion = () => {
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

        if (
            usuarioGuardado &&
            form.correo === usuarioGuardado.correo &&
            form.contrasena === usuarioGuardado.contrasena
        ) {
            setAutenticado(true);
            toast.success('Sesión iniciada correctamente');
            setTimeout(() => navigate('/home'), 300); // ✅ espera breve para mostrar toast antes de redirigir
        } else {
            toast.error('Credenciales incorrectas o usuario no registrado');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        modo === 'registro' ? guardarUsuario() : iniciarSesion();
    };

    return (
        <div className="container">
            <h2>{modo === 'registro' ? 'Registrarse' : 'Iniciar Sesión'}</h2>
            <form onSubmit={handleSubmit}>
                {modo === 'registro' && (
                    <input
                        name="nombre"
                        placeholder="Nombre completo"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                )}
                <input
                    name="correo"
                    type="email"
                    placeholder="Correo electrónico"
                    value={form.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    name="contrasena"
                    type="password"
                    placeholder="Contraseña"
                    value={form.contrasena}
                    onChange={handleChange}
                    required
                />
                <button type="submit">
                    {modo === 'registro' ? 'Registrarse' : 'Ingresar'}
                </button>
            </form>
            <p>
                {modo === 'registro' ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
                <button onClick={() => setModo(modo === 'registro' ? 'login' : 'registro')}>
                    {modo === 'registro' ? 'Inicia sesión' : 'Regístrate'}
                </button>
            </p>
        </div>
    );
}
