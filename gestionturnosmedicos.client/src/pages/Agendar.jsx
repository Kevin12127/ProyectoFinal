import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Agendar() {
    const [form, setForm] = useState({
        nombrePaciente: '',
        cedula: '',
        especialidad: '',
        fecha: '',
        hora: ''
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const especialidades = [
        'Cardiología',
        'Pediatría',
        'Dermatología',
        'Ortopedia',
        'Ginecología'
    ];

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);
        console.log('📦 Enviando datos al backend:', form);

        try {
            const response = await axios.post('https://localhost:5001/api/Turnos', form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201 || response.status === 200) {
                console.log('✅ Turno registrado exitosamente');
                navigate('/confirmacion', { state: form });
            } else {
                alert('⚠️ El servidor no respondió correctamente. Revisa la configuración.');
            }
        } catch (error) {
            console.error('🛑 Error al agendar cita:', error);
            alert('Error al agendar la cita. Verifica la conexión al servidor o los datos enviados.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Agendar Cita Médica</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="nombrePaciente"
                    placeholder="Nombre completo"
                    value={form.nombrePaciente}
                    onChange={handleChange}
                    required
                />
                <input
                    name="cedula"
                    placeholder="Cédula"
                    value={form.cedula}
                    onChange={handleChange}
                    required
                />
                <select
                    name="especialidad"
                    value={form.especialidad}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una especialidad</option>
                    {especialidades.map((esp, i) => (
                        <option key={i} value={esp}>{esp}</option>
                    ))}
                </select>
                <input
                    name="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={handleChange}
                    required
                />
                <input
                    name="hora"
                    placeholder="Hora (HH:mm)"
                    type="time"
                    value={form.hora}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Agendando...' : 'Agendar'}
                </button>
            </form>
        </div>
    );
}

