using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Person
{
    public int Id { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório!")]
    public string Name { get; set; } = string.Empty;

    [Range(1, 120, ErrorMessage = "Idade é obrigatória!")]
    public int Age { get; set; }

    public List<Transaction> Transactions { get; set; } = new();
}
