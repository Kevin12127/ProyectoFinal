import { useLocation } from 'react-router-dom';

export default function Confirmacion() {
    const location = useLocation();
    const turno = location.state;

    return (
        <div className="container">
            <h2>Confirmación de Cita</h2>
            <p><strong>Paciente:</strong> {turno.nombrePaciente}</p>
            <p><strong>Cédula:</strong> {turno.cedula}</p>
            <p><strong>Especialidad:</strong> {turno.especialidad}</p>
            <p><strong>Fecha:</strong> {turno.fecha}</p>
            <p><strong>Hora:</strong> {turno.hora}</p>
        </div>
    );
}
