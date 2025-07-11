using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

[ApiController]
[Route("api/[controller]")]
public class TurnosController : ControllerBase
{
    private readonly TurnosContext _context;

    public TurnosController(TurnosContext context)
    {
        _context = context;
    }

    // GET: api/Turnos
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Turno>>> GetTurnos()
    {
        return await _context.Turnos.ToListAsync();
    }

    // POST: api/Turnos
    [HttpPost]
    public async Task<ActionResult<Turno>> PostTurno([FromBody] Turno turno)
    {
        if (turno == null)
            return BadRequest("Datos inválidos.");

        // Validaciones de campos obligatorios
        if (string.IsNullOrWhiteSpace(turno.NombrePaciente) ||
            string.IsNullOrWhiteSpace(turno.Cedula) ||
            string.IsNullOrWhiteSpace(turno.Especialidad) ||
            turno.Fecha == default ||
            string.IsNullOrWhiteSpace(turno.Hora))
        {
            return BadRequest("Todos los campos son obligatorios.");
        }

        // Asignar fecha de registro si no viene desde el frontend
        turno.FechaRegistro = DateTime.Now;

        // Guardar en base de datos
        _context.Turnos.Add(turno);
        await _context.SaveChangesAsync();

        // Confirmación exitosa
        return Ok(turno); // ✅ Devuelve 200 OK con el turno registrado
    }
}
