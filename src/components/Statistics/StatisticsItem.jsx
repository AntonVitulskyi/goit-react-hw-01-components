import PropTypes from 'prop-types';

import styles from './Statistics.module.css'

export default function StatisticsItem ({ label, percentage}) {
	return (
        <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
        </li>
	)
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
      }
    