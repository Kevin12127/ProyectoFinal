import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login({ setAutenticado }) {
    const [modo, setModo] = useState('login');
    const [form, setForm] = useState({
        nombre: '',
        cedula: '',
        correo: '',
        contrasena: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const iniciarSesion = () => {
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

        if (
            usuarioGuardado &&
            form.cedula === usuarioGuardado.cedula &&
            form.contrasena === usuarioGuardado.contrasena
        ) {
            setAutenticado(true);
            toast.success('Sesión iniciada correctamente');
            setTimeout(() => navigate('/home'), 300);
        } else {
            toast.error('Credenciales incorrectas o usuario no registrado');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (modo === 'registro') {
            const contraseña = form.contrasena;

            // ✅ Validación estricta: mínimo 10 caracteres, 1 mayúscula, 1 número, 1 símbolo especial
            const esValida = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/.test(contraseña);

            if (!esValida) {
                toast.error('La contraseña debe tener al menos 10 caracteres, una mayúscula, un número y un símbolo especial.');
                return;
            }

            localStorage.setItem('usuarioRegistrado', JSON.stringify(form));
            toast.success('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
            setModo('login');
            setForm({ nombre: '', cedula: '', correo: '', contrasena: '' });
        } else {
            iniciarSesion();
        }
    };

    return (
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto', padding: '30px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                {modo === 'registro' ? 'Registrarse' : 'Iniciar Sesión'}
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {modo === 'registro' && (
                    <>
                        <input
                            name="nombre"
                            placeholder="Nombre completo"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="cedula"
                            placeholder="Número de cédula"
                            value={form.cedula}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="correo"
                            type="email"
                            placeholder="Correo electrónico"
                            value={form.correo}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                {modo === 'login' && (
                    <input
                        name="cedula"
                        placeholder="Número de cédula"
                        value={form.cedula}
                        onChange={handleChange}
                        required
                    />
                )}

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
            <p style={{ marginTop: '20px', textAlign: 'center' }}>
                {modo === 'registro' ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
                <button onClick={() => setModo(modo === 'registro' ? 'login' : 'registro')} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
                    {modo === 'registro' ? 'Inicia sesión' : 'Regístrate'}
                </button>
            </p>
        </div>
    );
}
