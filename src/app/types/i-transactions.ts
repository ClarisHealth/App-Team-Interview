export interface IAccountTransaction {
  account_id: number;
  transaction_count: number;
  transactions: [ITransaction]
}

export interface ITransaction {
  date: string;
  amount: number;
  transaction_code: string;
  symbol: string;
  price: string;
  total: string;
}
