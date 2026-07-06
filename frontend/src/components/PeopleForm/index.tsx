import type { PersonForm } from "@/types/person";
import { FaUserPlus } from "react-icons/fa";

type Props = {
  form: PersonForm;
  loading: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export default function PeopleForm({
  form,
  loading,
  error,
  onChange,
  onSubmit,
}: Props) {
  return (
    <section className="card form-inline" style={{ flex: 1 }}>
      <h3>
        <FaUserPlus /> Cadastrar Pessoa
      </h3>

      <div className="form-row">
        <input
          className="input"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={onChange}
        />

        <input
          className="input"
          name="age"
          type="number"
          placeholder="Idade"
          value={form.age}
          onChange={onChange}
        />

        <button className="button" onClick={onSubmit} disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </div>

      {error && <span className="error-text">{error}</span>}
    </section>
  );
}
