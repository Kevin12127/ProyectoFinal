public class Turno
{
    public int Id { get; set; } // generado automáticamente
    public string NombrePaciente { get; set; }
    public string Cedula { get; set; }
    public string Especialidad { get; set; }
    public DateTime Fecha { get; set; }
    public string Hora { get; set; }
    public DateTime FechaRegistro { get; set; } = DateTime.Now;
}
