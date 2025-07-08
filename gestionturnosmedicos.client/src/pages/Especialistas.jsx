const especialistas = [
    { nombre: 'Cardiología', horario: 'Lunes a Viernes 08:00 - 12:00' },
    { nombre: 'Pediatría', horario: 'Martes y Jueves 10:00 - 14:00' },
    { nombre: 'Dermatología', horario: 'Miércoles 09:00 - 13:00' },
];

export default function Especialistas() {
    return (
        <div className="container">
            <h2>Especialidades disponibles</h2>
            <ul>
                {especialistas.map((e, i) => (
                    <li key={i}>{e.nombre} - {e.horario}</li>
                ))}
            </ul>
        </div>
    );
}
