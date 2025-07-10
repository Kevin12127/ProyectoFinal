import { useState } from 'react';

export default function Chatbot() {
    const [mensajes, setMensajes] = useState([]);
    const [entrada, setEntrada] = useState('');

    const preguntasFrecuentes = [
        '¿Dónde están ubicados?',
        '¿Cómo puedo agendar una cita?',
        '¿Cuál es el horario de atención?',
        '¿Qué especialidades tienen disponibles?',
        '¿Cómo puedo contactar con el centro médico?'
    ];

    // Lógica mejorada de respuestas
    const responder = (texto) => {
        const lower = texto.toLowerCase();

        if (
            lower.includes('cita') ||
            lower.includes('agendar') ||
            lower.includes('reservar')
        ) {
            return '📅 Puedes agendar tu cita médica en la sección "Agendar", seleccionando la especialidad, fecha y hora que prefieras.';
        }

        if (
            lower.includes('ubicación') ||
            lower.includes('dónde están') ||
            lower.includes('dónde queda')
        ) {
            return '📍 Estamos ubicados en Guayllabamba, cerca del parque central. Puedes ver el mapa en la sección "Ubicación".';
        }

        if (
            lower.includes('horario') ||
            lower.includes('hora de atención') ||
            lower.includes('cuando atienden')
        ) {
            return '🕒 Nuestro horario de atención es de lunes a viernes, de 08:00 a 17:00.';
        }

        if (
            lower.includes('contacto') ||
            lower.includes('contactar') ||
            lower.includes('comunicar') ||
            lower.includes('teléfono') ||
            lower.includes('correo')
        ) {
            return '📞 Puedes contactarnos directamente en el centro médico o usar este sistema para recibir asistencia. También estamos disponibles en recepción.';
        }

        if (
            lower.includes('especialidad') ||
            lower.includes('especialidades') ||
            lower.includes('qué doctores hay') ||
            lower.includes('qué médicos') ||
            lower.includes('profesionales disponibles')
        ) {
            return '👩‍⚕️ Contamos con especialistas en Cardiología, Pediatría, Dermatología, Ortopedia y Ginecología. Puedes ver los detalles en la sección "Especialidades".';
        }

        return '🤖 Lo siento, no tengo una respuesta para eso aún. Puedes preguntarme sobre citas, ubicación, horarios, contacto o especialidades.';
    };

    const enviarMensaje = (texto = entrada) => {
        if (texto.trim() === '') return;
        const respuesta = responder(texto);
        setMensajes((prev) => [...prev, { tipo: 'usuario', texto }, { tipo: 'bot', texto: respuesta }]);
        setEntrada('');
    };

    return (
        <div className="container" style={{ padding: '20px' }}>
            <h2>Chatbot de asistencia</h2>

            {/* Introducción al chatbot */}
            <p style={{ marginBottom: '20px', textAlign: 'justify', lineHeight: '1.5' }}>
                Este chatbot está diseñado para ayudarte con preguntas frecuentes relacionadas al centro médico, como ubicación,
                agendar citas, horarios de atención, especialidades disponibles y formas de contacto. Solo escribe tu consulta o
                selecciona una de las preguntas sugeridas abajo para comenzar.
            </p>

            {/* Preguntas frecuentes */}
            <div style={{ marginBottom: '25px' }}>
                <h4 style={{ marginBottom: '12px', fontSize: '1.1em' }}>Preguntas frecuentes</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '600px' }}>
                    {preguntasFrecuentes.map((pregunta, index) => (
                        <button
                            key={index}
                            onClick={() => enviarMensaje(pregunta)}
                            style={{
                                padding: '12px 16px',
                                backgroundColor: '#e6f2ff',
                                border: '1px solid #b3d7ff',
                                borderRadius: '8px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '1em',
                                color: '#003366',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d0e7ff')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e6f2ff')}
                        >
                            {pregunta}
                        </button>
                    ))}
                </div>
            </div>

            {/* Historial de mensajes */}
            <div
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '15px',
                    height: '300px',
                    overflowY: 'auto',
                    backgroundColor: '#f4f4f4',
                    marginBottom: '20px'
                }}
            >
                {mensajes.map((m, i) => (
                    <p key={i} style={{ margin: '8px 0' }}>
                        <strong>{m.tipo === 'usuario' ? 'Tú' : 'Bot'}:</strong> {m.texto}
                    </p>
                ))}
            </div>

            {/* Campo de entrada */}
            <input
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                placeholder="Escribe tu pregunta..."
                style={{
                    width: '70%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginRight: '10px'
                }}
            />
            <button
                onClick={() => enviarMensaje()}
                style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Enviar
            </button>
        </div>
    );
}
