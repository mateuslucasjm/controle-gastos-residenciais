import type { TransactionWithPerson } from "@/hooks/useTransaction";
import { TransactionType } from "@/types/transaction";
import "./TransactionTable.css";

type Props = {
  transactions: TransactionWithPerson[];
};

export default function TransactionTable({ transactions }: Props) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Idade</th>
          <th>Valor</th>
          <th>Tipo</th>
        </tr>
      </thead>

      <tbody>
        {transactions.length === 0 ? (
          <tr>
            <td colSpan={5} className="empty-table">
              Nenhuma transação cadastrada.
            </td>
          </tr>
        ) : (
          transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.person?.name}</td>
              <td>{transaction.description}</td>
              <td>{transaction.person?.age}</td>
              <td>
                {transaction.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                <span
                  className={
                    transaction.type === TransactionType.Income
                      ? "transaction-income"
                      : "transaction-expense"
                  }
                >
                  {transaction.type === TransactionType.Income
                    ? "Receita"
                    : "Despesa"}
                </span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
