import DashboardCards from "@/components/DashboardCards";
import { DashboardError } from "@/components/DashboardError";
import DashboardTable from "@/components/DashboardTable";
import TextTitle from "@/components/TexTitle";
import { useReport } from "@/hooks/useReport";
import "./DashboardPage.css";

export default function DashboardPage() {
  const { report, error } = useReport();
  if (error) return <DashboardError />;
  if (!report) return <DashboardError />;

  return (
    <div>
      <TextTitle
        title="Dashboard"
        subtitle="Visão geral das receitas, despesas e saldos."
      />

      <div className="dashboard-page">
        <DashboardCards
          totalIncome={report.totalIncome}
          totalExpense={report.totalExpense}
          balance={report.balance}
          totalPeople={report.people.length}
        />

        <DashboardTable
          people={report.people}
          totalIncome={report.totalIncome}
          totalExpense={report.totalExpense}
          balance={report.balance}
        />
      </div>
    </div>
  );
}
