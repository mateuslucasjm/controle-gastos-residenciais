import { FaHome, FaReceipt, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const items = [
  { label: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
  { label: "Pessoas", path: "/pessoas", icon: <FaUsers /> },
  { label: "Transações", path: "/transacoes", icon: <FaReceipt /> },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaHome className="home-icon" />
        <h3>Controle de Gastos Residenciais</h3>
      </div>

      <nav>
        <ul>
          {items.map((i) => (
            <li
              key={i.path}
              className={`item ${location.pathname === i.path ? "active" : ""}`}
              onClick={() => navigate(i.path)}
            >
              <span className="icon">{i.icon}</span>
              <span className="label">{i.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
