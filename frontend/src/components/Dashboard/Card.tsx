import type { IconType } from "react-icons";

type Props = {
  title: string;
  value: string | number;
  icon: IconType;
  color: "income" | "expense" | "balance" | "people";
};

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <div className="card dashboard-card">
      <div className={`card-icon ${color}`}>
        <Icon />
      </div>

      <div className="card-content">
        <span>{title}</span>
        <strong className={`${color}-text`}>{value}</strong>
      </div>
    </div>
  );
}
