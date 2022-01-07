import s from './StatisticsItem.module.css';
import randomColor from 'utils/colorPicker';

const StatisticsItem = ({ item }) => {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: randomColor(),
        // width: 270 / stats.length,
      }}
    >
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;
