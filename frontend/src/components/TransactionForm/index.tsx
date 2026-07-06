import type { Person } from "@/types/person";
import type { TransactionForm as TransactionFormType } from "@/types/transaction";
import { TransactionType } from "@/types/transaction";
import { FaPlusCircle } from "react-icons/fa";

type Props = {
  form: TransactionFormType;
  people: Person[];
  loading: boolean;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onSubmit: () => void;
};

export default function TransactionForm({
  form,
  people,
  loading,
  error,
  onChange,
  onSubmit,
}: Props) {
  return (
    <section className="card form-inline" style={{ flex: 1 }}>
      <h3>
        <FaPlusCircle /> Adicionar Transação
      </h3>

      <div className="form-row">
        <input
          className="input"
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={onChange}
        />

        <input
          className="input"
          name="value"
          type="number"
          placeholder="Valor"
          value={form.value}
          onChange={onChange}
        />

        <select
          className="input"
          name="type"
          value={form.type}
          onChange={onChange}
        >
          <option value={TransactionType.Expense}>Despesa</option>
          <option value={TransactionType.Income}>Receita</option>
        </select>

        <select
          className="input"
          name="personId"
          value={form.personId}
          onChange={onChange}
        >
          <option value="" disabled hidden>
            Pessoa
          </option>

          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>

        <button className="button" onClick={onSubmit} disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </div>

      {error && <span className="error-text">{error}</span>}
    </section>
  );
}
