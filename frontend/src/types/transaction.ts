export const TransactionType = {
  Expense: 0,
  Income: 1,
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export type Transaction = {
  id: number;
  description: string;
  value: number;
  type: TransactionType;
  personId: number;
};

export type CreateTransaction = {
  description: string;
  value: number;
  type: TransactionType;
  personId: number;
};

export type TransactionForm = {
  description: string;
  value: string;
  type: TransactionType;
  personId: string;
};
