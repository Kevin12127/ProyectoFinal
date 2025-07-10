export default function Ubicacion() {
    return (
        <div className="container" style={{ padding: '30px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                Ubicación del Centro de Salud
            </h2>

            {/* Descripción del lugar */}
            <p
                style={{
                    textAlign: 'justify',
                    fontSize: '1.05em',
                    lineHeight: '1.6',
                    backgroundColor: '#f3f8ff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                    marginBottom: '40px',
                    maxWidth: '900px',
                    margin: '0 auto 40px auto'
                }}
            >
                El Centro de Salud Guayllabamba está ubicado en el corazón del valle de Guayllabamba, al norte de Quito. Nos
                encontramos a pocos pasos del parque central, en una zona accesible y reconocible por su entorno natural y
                tranquilo. Ofrecemos atención médica de calidad en instalaciones modernas y estamos rodeados de servicios
                comunitarios que complementan tu visita. La ubicación permite fácil acceso desde el centro y las parroquias
                vecinas, ya sea en transporte público o privado.
            </p>

            {/* Mapa incrustado */}
            <iframe
                title="Mapa Guayllabamba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d-78.350000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a123456789%3A0xabcdef123456789!2sGuayllabamba!5e0!3m2!1ses!2ec!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
