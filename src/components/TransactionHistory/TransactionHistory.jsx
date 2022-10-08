import propTypes from 'prop-types';
import { Transaction, TransactionHeader, TransactionHeaderCell, TransactionRow, TransactionCell } from './TransactionHistory.styled';

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
  transactions: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  })
}
