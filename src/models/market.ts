import { createModel } from '@rematch/core';
import { LineChartType } from 'constants/enum';
import MarketService from 'services/market';

import { RootModel } from './index';

type MarketState = {
  currentPrice: number;
  chartDatas: {
    [key in `${LineChartType}`]: Array<any>;
  };
};

export default createModel<RootModel>()({
  state: {
    chartDatas: {},
    currentPrice: 0,
  } as MarketState,
  effects: {
    getPriceHistory(params: Parameters<typeof MarketService.getPriceHistory>[0]) {
      return MarketService.getPriceHistory(params);
    },
    async getChartData() {
      let querys = [
        LineChartType.Day,
        LineChartType.Week,
        LineChartType.Month,
        LineChartType.Year,
      ].map((item) => MarketService.getPriceHistory({ type: item }));

      let res = await Promise.allSettled(querys);
      const datas = res.map((item) => {
        if (item.status === 'fulfilled') {
          return item.value;
        }
        return null;
      });

      this.save({
        currentPrice: datas[0]?.currentPrice,
        chartDatas: {
          [LineChartType.Day]: datas[0]?.data,
          [LineChartType.Week]: datas[1]?.data,
          [LineChartType.Month]: datas[2]?.data,
          [LineChartType.Year]: datas[3]?.data,
        },
      });
    },
  },
  reducers: {
    save(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});
