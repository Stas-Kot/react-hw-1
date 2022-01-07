import s from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ item }) => {
  return (
    <tr className={s.transactionTR}>
      <td className={s.type}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
