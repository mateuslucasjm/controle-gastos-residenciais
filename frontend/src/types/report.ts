export type PersonReport = {
  personId: number;
  name: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

export type Report = {
  people: PersonReport[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
};
