import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css'

export default function TransactionHistoryItem ({ type, amount, currency}) {
	return (
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
     </tr>
	)
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
      }