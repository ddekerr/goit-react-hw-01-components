import PropTypes from 'prop-types';
import {
  Transaction,
  TransactionHeader,
  TransactionHeaderCell,
  TransactionRow,
  TransactionCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Transaction>
      <TransactionHeader>
        <tr>
          <TransactionHeaderCell>Type</TransactionHeaderCell>
          <TransactionHeaderCell>Amount</TransactionHeaderCell>
          <TransactionHeaderCell>Currency</TransactionHeaderCell>
        </tr>
      </TransactionHeader>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionCell>{type}</TransactionCell>
            <TransactionCell>{amount}</TransactionCell>
            <TransactionCell>{currency}</TransactionCell>
          </TransactionRow>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
