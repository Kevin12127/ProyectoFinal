export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Bienvenido al Centro de Salud Guayllabamba</h2>
            <p style={{ textAlign: 'center' }}>Seleccione una opción en el menú para continuar.</p>

            <hr style={{ margin: '30px 0' }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 400px',
                alignItems: 'center',
                gap: '40px',
                maxWidth: '1100px',
                margin: '0 auto'
            }}>
                {/* Texto a la izquierda */}
                <div style={{
                    fontSize: '1.1em',
                    lineHeight: '1.6'
                }}>
                    <h3>¿Quiénes somos?</h3>
                    <p>
                        Somos un equipo comprometido con la salud y el bienestar de nuestra comunidad.
                        El Centro de Salud Guayllabamba ofrece atención médica profesional y cercana,
                        con especialistas capacitados y servicios accesibles para todos. Creemos en una
                        atención humana, oportuna y respetuosa. Bienvenido a nuestro sistema digital —
                        aquí podrás agendar tus citas, consultar especialidades, conversar con nuestro
                        chatbot asistente y conocer más sobre nuestra ubicación. Tu salud es nuestra prioridad.
                    </p>
                </div>

                {/* Imagen a la derecha */}
                <img
                    src="https://arriendayvende.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-21-at-14.43.20.jpg"
                    alt="Centro Médico en Guayllabamba"
                    style={{
                        width: '100%',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    );
}
