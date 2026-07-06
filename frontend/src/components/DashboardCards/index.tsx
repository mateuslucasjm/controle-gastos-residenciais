import DashboardCard from "@/components/DashboardCard";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";

type Props = {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  totalPeople: number;
};

export default function DashboardCards({
  totalIncome,
  totalExpense,
  balance,
  totalPeople,
}: Props) {
  return (
    <div className="dashboard-cards">
      <DashboardCard
        title="Total de Receitas"
        value={formatCurrency(totalIncome)}
        icon={FaArrowTrendUp}
        color="income"
      />

      <DashboardCard
        title="Total de Despesas"
        value={formatCurrency(totalExpense)}
        icon={FaArrowTrendDown}
        color="expense"
      />

      <DashboardCard
        title="Saldo Líquido"
        value={formatCurrency(balance)}
        icon={FaWallet}
        color="balance"
      />

      <DashboardCard
        title="Total de Pessoas"
        value={totalPeople}
        icon={FaUsers}
        color="people"
      />
    </div>
  );
}
