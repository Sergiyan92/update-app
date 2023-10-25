import React from "react";
interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}
interface TransactionHistoryProps {
  items: Transaction[];
}
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
  return (
    <table className="container w-100 border-collapse ml-auto mr-auto mt-5">
      <thead>
        <tr>
          <th className="border  p-8 bg-blue-600 text-white text-center">
            Type
          </th>
          <th className="border  p-8  bg-blue-600 text-white text-center">
            Amount
          </th>
          <th className="border  p-8  bg-blue-600 text-white text-center">
            Currency
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="border  p-4 text-center">{type}</td>
            <td className="border  p-4 text-center">{amount}</td>
            <td className="border  p-4 text-center">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
