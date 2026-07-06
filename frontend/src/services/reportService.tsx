import api from "@/services/api";
import type { Report } from "@/types/report";

export async function getReport(): Promise<Report> {
  const { data } = await api.get<Report>("/reports/people-totals");

  return data;
}
