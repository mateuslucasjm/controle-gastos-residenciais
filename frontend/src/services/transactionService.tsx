import api from "@/services/api";
import type { CreateTransaction, Transaction } from "@/types/transaction";

export async function loadTransactions(): Promise<Transaction[]> {
  const response = await api.get("/transaction");
  return response.data;
}

export async function createTransaction(
  transaction: CreateTransaction,
): Promise<Transaction> {
  const response = await api.post("/transaction", transaction);
  return response.data;
}
