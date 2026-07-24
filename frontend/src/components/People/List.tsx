import type { Person } from "@/types/person";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import "./List.css";

type Props = {
  people: Person[];
  onRemove: (id: number) => void;
};

export default function PeopleList({ people, onRemove }: Props) {
  return (
    <section className="card" style={{ flex: 1.5 }}>
      <h3>
        <FaUsers /> Lista de Pessoas
      </h3>

      {people.length === 0 ? (
        <div className="empty-state">
          <p>Nenhuma pessoa cadastrada.</p>
        </div>
      ) : (
        people.map((p) => (
          <div key={p.id} className="list-item">
            <div className="person-info">
              <FaUser color="var(--accent)" />

              <div>
                <strong className="person-name">{p.name}</strong>
                <p className="person-age">{p.age} anos</p>
              </div>
            </div>

            <button className="delete-btn" onClick={() => onRemove(p.id)}>
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </section>
  );
}
