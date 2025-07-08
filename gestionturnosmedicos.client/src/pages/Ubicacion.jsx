export default function Ubicacion() {
  return (
    <div className="container">
      <h2>Ubicación del Centro de Salud</h2>
      <iframe
        title="Mapa Guayllabamba"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d-78.350000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a123456789%3A0xabcdef123456789!2sGuayllabamba!5e0!3m2!1ses!2sec!4v1234567890"
        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
      ></iframe>
    </div>
  );
}
