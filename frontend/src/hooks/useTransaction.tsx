import { loadPeople } from "@/services/peopleService";
import {
  createTransaction,
  loadTransactions,
} from "@/services/transactionService";
import type { Person } from "@/types/person";
import {
  TransactionType,
  type CreateTransaction,
  type Transaction,
  type TransactionForm,
} from "@/types/transaction";
import { useEffect, useState } from "react";

export type TransactionWithPerson = Transaction & {
  person?: Person;
};

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [form, setForm] = useState<TransactionForm>({
    description: "",
    value: "",
    type: TransactionType.Expense,
    personId: "",
  });

  async function load() {
    const [transactionsData, peopleData] = await Promise.all([
      loadTransactions(),
      loadPeople(),
    ]);

    setTransactions(transactionsData);
    setPeople(peopleData);
  }

  useEffect(() => {
    load();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "type" ? (Number(value) as TransactionType) : value,
    }));
  }

  async function create() {
    setError(undefined);

    try {
      setLoading(true);

      const payload: CreateTransaction = {
        description: form.description,
        value: Number(form.value),
        type: form.type,
        personId: Number(form.personId),
      };

      await createTransaction(payload);

      setForm({
        description: "",
        value: "",
        type: TransactionType.Expense,
        personId: "",
      });

      await load();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const transactionsWithPerson: TransactionWithPerson[] = transactions.map(
    (transaction) => ({
      ...transaction,
      person: people.find((p) => p.id === transaction.personId),
    }),
  );

  return {
    transactions: transactionsWithPerson,
    form,
    people,
    loading,
    error,
    handleChange,
    create,
  };
}
