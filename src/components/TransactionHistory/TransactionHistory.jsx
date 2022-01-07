import PropTypes from 'prop-types';
import TransactionHistoryItem from 'components/TransactionHistoryItem/TransactionHistoryItem';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={s.transactionTH}>Type</th>
          <th className={s.transactionTH}>Amount</th>
          <th className={s.transactionTH}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
