import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import DashboardPage from "@/pages/DashboardPage";
import PeoplePage from "@/pages/PeoplePage";
import TransactionPage from "@/pages/TransactionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/pessoas" element={<PeoplePage />} />
          <Route path="/transacoes" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}