using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Models;

public class Transaction
{
    public int Id { get; set; }

    [Required(ErrorMessage = "A descrição é obrigatória!")]
    public string Description { get; set; } = string.Empty;

    [Range(0.01, double.MaxValue, ErrorMessage = "O valor deve ser maior que zero!")]
    public decimal Value { get; set; }

    [Required(ErrorMessage = "O tipo da transação é obrigatório!")]
    public TransactionType Type { get; set; }

    [Required(ErrorMessage = "A pessoa é obrigatória!")]
    public int PersonId { get; set; }

    [JsonIgnore]
    public Person Person { get; set; } = null!;
}
