import { LuCloudOff } from "react-icons/lu";

export function DashboardPageError() {
  return (
    <div className="dashboard-feedback">
      <LuCloudOff className="dashboard-feedback-icon" />
      <h2>Oops!</h2>
      <p>Algo deu errado...</p>
    </div>
  );
}
