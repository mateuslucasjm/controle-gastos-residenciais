using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TransactionController : ControllerBase
{
    private readonly AppDbContext _context;

    public TransactionController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Transaction>>> Get()
    {
        var transactions = await _context.Transactions.ToListAsync();

        return Ok(transactions);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Transaction>> GetById(int id)
    {
        var transaction = await _context.Transactions.FirstOrDefaultAsync(t => t.Id == id);

        if (transaction == null)
            return NotFound("Transação não encontrada!");

        return Ok(transaction);
    }

    [HttpPost]
    public async Task<ActionResult<Transaction>> Create(Transaction transaction)
    {
        var person = await _context.People.FindAsync(transaction.PersonId);

        if (person == null)
            return NotFound("Pessoa não encontrada!");

        if (person.Age < 18 && transaction.Type == TransactionType.Income)
            return BadRequest("Menores de idade só podem cadastrar despesas!");

        _context.Transactions.Add(transaction);
        await _context.SaveChangesAsync();

        return Ok(transaction);
    }
}
