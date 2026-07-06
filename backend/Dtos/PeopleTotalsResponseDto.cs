public class PeopleTotalsResponseDto
{
    public List<PersonTotalsDto> People { get; set; } = new();

    public decimal TotalIncome { get; set; }
    public decimal TotalExpense { get; set; }
    public decimal Balance { get; set; }
}
