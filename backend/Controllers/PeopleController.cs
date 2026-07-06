using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class PeopleController : ControllerBase
{
    private readonly AppDbContext _context;

    public PeopleController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Person>>> Get()
    {
        var people = await _context.People.ToListAsync();

        return Ok(people);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Person>> GetById(int id)
    {
        var person = await _context
            .People.Include(p => p.Transactions)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (person == null)
            return NotFound("Pessoa não encontrada!");

        return Ok(person);
    }

    [HttpPost]
    public async Task<ActionResult<Person>> Create(Person person)
    {
        _context.People.Add(person);
        await _context.SaveChangesAsync();

        return Ok(person);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var person = await _context.People.FindAsync(id);

        if (person == null)
            return NotFound("Pessoa não encontrada!");

        _context.People.Remove(person);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
