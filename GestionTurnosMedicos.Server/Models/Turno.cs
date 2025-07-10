using System.Text.Json.Serialization;

public class Turno
{
    public int Id { get; set; }

    [JsonPropertyName("nombrePaciente")]
    public required string NombrePaciente { get; set; }

    [JsonPropertyName("cedula")]
    public required string Cedula { get; set; }

    [JsonPropertyName("especialidad")]
    public required string Especialidad { get; set; }

    [JsonPropertyName("fecha")]
    public DateTime Fecha { get; set; }

    [JsonPropertyName("hora")]
    public required string Hora { get; set; }

    [JsonPropertyName("fechaRegistro")]
    public DateTime FechaRegistro { get; set; }
}
