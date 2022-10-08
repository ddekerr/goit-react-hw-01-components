import propTypes from 'prop-types';
import {
  Statistic,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(({ label, percentage }) => (
          <StatisticItem style={{ backgroundColor: getRandomHexColor() }}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticItem>
        ))}
      </StatisticList>
    </Statistic>
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
