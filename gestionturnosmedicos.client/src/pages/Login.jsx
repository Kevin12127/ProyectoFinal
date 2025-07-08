import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAutenticado }) {
  const [modo, setModo] = useState('login'); // 'login' o 'registro'
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
    alert('Usuario registrado con �xito. Ahora puedes iniciar sesi�n.');
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
      navigate('/home');
    } else {
      alert('Credenciales incorrectas o usuario no registrado.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    modo === 'registro' ? guardarUsuario() : iniciarSesion();
  };

  return (
    <div className="container">
      <h2>{modo === 'registro' ? 'Registrarse' : 'Iniciar Sesi�n'}</h2>
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
          placeholder="Correo electr�nico"
          value={form.correo}
          onChange={handleChange}
          required
        />
        <input
          name="contrasena"
          type="password"
          placeholder="Contrase�a"
          value={form.contrasena}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {modo === 'registro' ? 'Registrarse' : 'Ingresar'}
        </button>
      </form>
      <p>
        {modo === 'registro' ? '�Ya tienes cuenta?' : '�No tienes cuenta?'}{' '}
        <button onClick={() => setModo(modo === 'registro' ? 'login' : 'registro')}>
          {modo === 'registro' ? 'Inicia sesi�n' : 'Reg�strate'}
        </button>
      </p>
    </div>
  );
}
