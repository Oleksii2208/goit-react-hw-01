import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionTable}>
      <thead>
        <tr>
          <th className={s.transactionTitle}>Type</th>
          <th className={s.transactionTitle}>Amount</th>
          <th className={s.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={s.transactionText} key={id}>
            <td className={s.transactionTextItem}>{type}</td>
            <td className={s.transactionTextItem}>{amount}</td>
            <td className={s.transactionTextItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
