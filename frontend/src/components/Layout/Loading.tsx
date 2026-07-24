import { CircularProgress } from "@mui/material";

export default function Loading({
  title = "Carregando",
  text = "Estamos buscando seus dados...",
}) {
  return (
    <div className="dashboard-feedback">
      <CircularProgress className="dashboard-loading" size={64} thickness={4} />

      <h2>{title}</h2>

      <p>{text}</p>
    </div>
  );
}
