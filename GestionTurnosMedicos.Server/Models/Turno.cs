using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

public class Turno
{
    public int Id { get; set; }

    [JsonPropertyName("nombrePaciente")]
    [Required]
    public string NombrePaciente { get; set; } = string.Empty;

    [JsonPropertyName("cedula")]
    [Required]
    public string Cedula { get; set; } = string.Empty;

    [JsonPropertyName("especialidad")]
    [Required]
    public string Especialidad { get; set; } = string.Empty;

    [JsonPropertyName("fecha")]
    [Required]
    public DateTime Fecha { get; set; }

    [JsonPropertyName("hora")]
    [Required]
    public string Hora { get; set; } = string.Empty;

    [JsonPropertyName("fechaRegistro")]
    public DateTime FechaRegistro { get; set; } = DateTime.Now;
}
