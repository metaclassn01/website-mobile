import { LineChartType } from 'constants/enum';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

type Data = {
  time: number;
  value: number;
  open: number;
  close: number;
  max: number;
  min: number;
};

const createMockData = (time?: number) => {
  let dayData: Data[] = [];
  let weekData: Data[] = [];
  let monthData: Data[] = [];
  let yearData: Data[] = [];
  const now = dayjs.utc(time).minute(0).second(0).millisecond(0);
  const today = now.hour(0);
  for (let i = 0; i < 25; i++) {
    dayData.push({
      time:
        now
          .subtract(1, 'day')
          .add(i + 1, 'hours')
          .valueOf() / 1000,
      value: 10.0,
      open: 10.0,
      close: 10.0,
      max: 10.0,
      min: 10.0,
    });
  }

  for (let i = 0; i < 8; i++) {
    weekData.push({
      time:
        now
          .subtract(1, 'week')
          .add(i + 1, 'day')
          .valueOf() / 1000,
      value: 10.0,
      open: 10.0,
      close: 10.0,
      max: 10.0,
      min: 10.0,
    });
  }
  for (let i = 0; i < 31; i++) {
    monthData.push({
      time:
        now
          .subtract(1, 'month')
          .add(i + 1, 'day')
          .valueOf() / 1000,
      value: 10.0,
      open: 10.0,
      close: 10.0,
      max: 10.0,
      min: 10.0,
    });
  }
  for (let i = 0; i < 13; i++) {
    yearData.push({
      time:
        now
          .subtract(1, 'year')
          .add(i + 1, 'month')
          .valueOf() / 1000,
      value: 10.0,
      open: 10.0,
      close: 10.0,
      max: 10.0,
      min: 10.0,
    });
  }
  return {
    [LineChartType.Day]: dayData,
    [LineChartType.Week]: weekData,
    [LineChartType.Month]: monthData,
    [LineChartType.Year]: yearData,
  };
};

export default createMockData;
