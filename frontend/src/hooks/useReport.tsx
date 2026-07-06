import { getReport } from "@/services/reportService";
import type { Report } from "@/types/report";
import { useCallback, useEffect, useState } from "react";

export function useReport() {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getReport();
      setReport(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    report,
    loading,
    error,
    reload: load,
  };
}
