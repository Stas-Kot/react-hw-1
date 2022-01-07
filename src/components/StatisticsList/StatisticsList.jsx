import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

import s from './StatisticsList.module.css';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {stats.map(item => (
          <StatisticsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
