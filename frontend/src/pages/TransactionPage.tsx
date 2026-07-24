import TextTitle from "@/components/Layout/TextTitle";
import TransactionForm from "@/components/Transaction/Form";
import TransactionTable from "@/components/Transaction/Table";
import { useTransactions } from "@/hooks/useTransaction";
import { FaExchangeAlt } from "react-icons/fa";

export default function TransactionPage() {
  const { transactions, people, form, loading, error, handleChange, create } =
    useTransactions();

  return (
    <div>
      <TextTitle
        title="Transações"
        subtitle="Cadastre e visualize as receitas e despesas."
      />

      <div className="grid">
        <TransactionForm
          form={form}
          people={people}
          loading={loading}
          error={error}
          onChange={handleChange}
          onSubmit={create}
        />
        <section className="card" style={{ flex: 1.5 }}>
          <h3>
            <FaExchangeAlt /> Transações
          </h3>

          <TransactionTable transactions={transactions} />
        </section>
      </div>
    </div>
  );
}
