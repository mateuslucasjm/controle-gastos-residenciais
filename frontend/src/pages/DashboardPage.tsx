import DashboardCards from "@/components/Dashboard/Cards";
import { DashboardPageError } from "@/components/Dashboard/PageError";
import DashboardTable from "@/components/Dashboard/Table";
import Loading from "@/components/Layout/Loading";
import TextTitle from "@/components/Layout/TextTitle";
import { useReport } from "@/hooks/useReport";
import "./DashboardPage.css";

export default function DashboardPage() {
  const { report, error, loading } = useReport();
  if (loading) {
    return <Loading/>;
  }
  if (error) return <DashboardPageError />;
  if (!report) return <DashboardPageError />;

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
