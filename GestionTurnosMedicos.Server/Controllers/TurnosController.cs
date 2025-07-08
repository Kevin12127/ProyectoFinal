using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        if (string.IsNullOrWhiteSpace(turno.NombrePaciente) ||
            string.IsNullOrWhiteSpace(turno.Cedula) ||
            string.IsNullOrWhiteSpace(turno.Especialidad) ||
            turno.Fecha == default ||
            string.IsNullOrWhiteSpace(turno.Hora))
        {
            return BadRequest("Todos los campos son obligatorios.");
        }

        _context.Turnos.Add(turno);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTurnos), new { id = turno.Id }, turno);
    }
}
