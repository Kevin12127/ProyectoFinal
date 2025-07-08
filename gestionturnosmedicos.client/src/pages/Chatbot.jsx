import { useState } from 'react';

export default function Chatbot() {
    const [mensajes, setMensajes] = useState([]);
    const [entrada, setEntrada] = useState('');

    const responder = (texto) => {
        if (texto.includes('cita')) return 'Puedes agendar tu cita en la secci�n "Agendar Cita".';
        if (texto.includes('ubicaci�n')) return 'Estamos ubicados en Guayllabamba. Revisa la secci�n "Ubicaci�n".';
        return 'Lo siento, no entend�. �Puedes reformular tu pregunta?';
    };

    const enviarMensaje = () => {
        const respuesta = responder(entrada.toLowerCase());
        setMensajes([...mensajes, { tipo: 'usuario', texto: entrada }, { tipo: 'bot', texto: respuesta }]);
        setEntrada('');
    };

    return (
        <div className="container">
            <h2>Chatbot de asistencia</h2>
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                {mensajes.map((m, i) => (
                    <p key={i}><strong>{m.tipo === 'usuario' ? 'T�' : 'Bot'}:</strong> {m.texto}</p>
                ))}
            </div>
            <input value={entrada} onChange={e => setEntrada(e.target.value)} placeholder="Escribe tu pregunta..." />
            <button onClick={enviarMensaje}>Enviar</button>
        </div>
    );
}
