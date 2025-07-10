export default function Especialistas() {
    const especialidades = [
        { nombre: 'Cardiología', horario: 'Lunes y Miércoles - 08:00 a 12:00' },
        { nombre: 'Pediatría', horario: 'Martes y Jueves - 08:00 a 12:00' },
        { nombre: 'Dermatología', horario: 'Viernes - 08:00 a 12:00' },
        { nombre: 'Ortopedia', horario: 'Lunes y Viernes - 14:00 a 17:00' },
        { nombre: 'Ginecología', horario: 'Miércoles - 14:00 a 17:00' }
    ];

    return (
        <div style={{ padding: '30px' }}>
            <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>
                Especialidades disponibles
            </h2>

            <p style={{
                textAlign: 'justify',
                marginBottom: '30px',
                lineHeight: '1.6',
                fontSize: '1.05em'
            }}>
                En el Centro de Salud Guayllabamba contamos con diversas especialidades médicas para atender las necesidades
                de nuestra comunidad. Cada área está compuesta por profesionales comprometidos con brindar una atención cálida,
                oportuna y de calidad. A continuación, te presentamos las especialidades disponibles junto con sus horarios de atención.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px',
                maxWidth: '600px'
            }}>
                {especialidades.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '15px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            backgroundColor: '#f2f2f2'
                        }}
                    >
                        <strong style={{ fontSize: '1.1em' }}>{item.nombre}</strong>
                        <p style={{ margin: '5px 0', color: '#333' }}>{item.horario}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
