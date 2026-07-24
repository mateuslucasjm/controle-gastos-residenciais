import { formatCurrency } from "@/utils/formatCurrency";
import { FaUsers } from "react-icons/fa6";

type PersonSummary = {
  personId: number;
  name: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type Props = {
  people: PersonSummary[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

export default function DashboardTable({
  people,
  totalIncome,
  totalExpense,
  balance,
}: Props) {
  return (
    <div className="card dashboard-table-card">
      <h3>
        <FaUsers />
        Resumo por pessoa
      </h3>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Pessoa</th>
            <th>Receitas</th>
            <th>Despesas</th>
            <th>Saldo</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr key={person.personId}>
              <td>{person.name}</td>
              <td className="income-text">
                {formatCurrency(person.totalIncome)}
              </td>
              <td className="expense-text">
                {formatCurrency(person.totalExpense)}
              </td>
              <td className="balance-text">{formatCurrency(person.balance)}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total Geral</td>
            <td className="income-text">{formatCurrency(totalIncome)}</td>
            <td className="expense-text">{formatCurrency(totalExpense)}</td>
            <td className="balance-text">{formatCurrency(balance)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
