import PropTypes from 'prop-types';
import {
  Statistic,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticLabel,
  StatisticPercent,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(({ label, percentage, id }) => (
          <StatisticItem key={id} bg={getRandomHexColor()}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercent>{percentage}%</StatisticPercent>
          </StatisticItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
