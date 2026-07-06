using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReportsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ReportsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("people-totals")]
    public async Task<ActionResult> GetPeopleTotals()
    {
        var people = await _context.People.Include(p => p.Transactions).ToListAsync();

        var result = people
            .Select(person =>
            {
                var income = person
                    .Transactions.Where(t => t.Type == TransactionType.Income)
                    .Sum(t => t.Value);

                var expense = person
                    .Transactions.Where(t => t.Type == TransactionType.Expense)
                    .Sum(t => t.Value);

                return new
                {
                    personId = person.Id,
                    name = person.Name,
                    totalIncome = income,
                    totalExpense = expense,
                    balance = income - expense,
                };
            })
            .ToList();

        var totalIncome = result.Sum(x => x.totalIncome);
        var totalExpense = result.Sum(x => x.totalExpense);

        return Ok(
            new
            {
                people = result,
                totalIncome,
                totalExpense,
                balance = totalIncome - totalExpense,
            }
        );
    }
}
