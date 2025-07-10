export default function Home() {
    return (
        <div style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
                Bienvenido al Centro de Salud Guayllabamba
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '50px' }}>
                Seleccione una opción en el menú para continuar.
            </p>

            {/* Sección ¿Quiénes somos? */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px',
                    alignItems: 'stretch',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    paddingBottom: '50px'
                }}
            >
                {/* Texto justificado con título centrado */}
                <div
                    style={{
                        fontSize: '1em',
                        lineHeight: '1.5',
                        textAlign: 'justify',
                        marginTop: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <h3 style={{ textAlign: 'center' }}>¿Quiénes somos?</h3>
                    <p>
                        Un centro médico comunitario que combina tecnología moderna y atención cercana.
                        Nuestra misión es servir con calidez, respeto y excelencia médica. Desde este sistema digital,
                        puedes agendar tus citas, explorar especialidades y recibir orientación personalizada.
                    </p>
                </div>

                {/* Imagen alineada al bloque completo */}
                <img
                    src="https://arriendayvende.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-21-at-14.43.20.jpg"
                    alt="Centro Médico en Guayllabamba"
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        boxShadow: '0 0 15px rgba(0,0,0,0.1)'
                    }}
                />
            </div>

            {/* Sección testimonios */}
            <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '10px' }}>
                <h3 style={{ textAlign: 'left', marginBottom: '30px' }}>¿Qué dicen nuestros pacientes?</h3>

                <div style={{ marginBottom: '25px', textAlign: 'left' }}>
                    <strong>David Narváez</strong>
                    <p>🟢 Excelente atención, excelentes instalaciones de última tecnología, los mejores médicos de Guayllabamba.</p>
                </div>

                <div style={{ marginBottom: '25px', textAlign: 'left' }}>
                    <strong>Maryness Ruiz</strong>
                    <p>🟣 Sin duda el hospital más moderno de todo Guayllabamba y las mejores instalaciones y excelentes médicos, demasiada buena atención, el mejor traumatólogo.</p>
                </div>

                <div style={{ marginBottom: '25px', textAlign: 'left' }}>
                    <strong>Judy Vargas</strong>
                    <p>🔴 Excelente hospital, excelente atención, super recomendable.</p>
                </div>

                <div style={{ textAlign: 'left' }}>
                    <strong>Fernando Moya</strong>
                    <p>🔵 Gran hospital, excelente servicio muy recomendable. Hice que mi mamá se sometiera a una cirugía por dos cánceres de páncreas y todo salió bien y sin complicaciones. Enfermeras y personal de recepción muy atentos y amables. De excelente elección. Gracias por todo.</p>
                </div>
            </div>
        </div>
    );
}
