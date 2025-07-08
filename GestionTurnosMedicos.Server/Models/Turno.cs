using System.Text.Json.Serialization;

public class Turno
{
    public int Id { get; set; }

    [JsonPropertyName("nombrePaciente")]
    public string NombrePaciente { get; set; }

    [JsonPropertyName("cedula")]
    public string Cedula { get; set; }

    [JsonPropertyName("especialidad")]
    public string Especialidad { get; set; }

    [JsonPropertyName("fecha")]
    public DateTime Fecha { get; set; }

    [JsonPropertyName("hora")]
    public string Hora { get; set; }
}
