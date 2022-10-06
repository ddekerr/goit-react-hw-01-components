import css from './Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats, bgColor }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} style={{ backgroundColor: bgColor }}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }),
};
