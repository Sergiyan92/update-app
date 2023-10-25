import React from "react";
import TransactionHistory from "../components/transaction/TransactionHistory";
import transactions from "../data/transactions.json";
const TransactionPage = () => {
  return <TransactionHistory items={transactions} />;
};

export default TransactionPage;
