import { LineChartType } from 'constants/enum';
import dayjs from 'dayjs';

import { instance } from '../http';

interface IMarketService {
  // TODO: 将 type 的类型抽离
  getPriceHistory: (params: { type: `${LineChartType}` }) => Promise<{
    currentPrice: number;
    data: {
      time: number;
      value: number;
      open: number;
      close: number;
      max: number;
      min: number;
    }[];
  }>;
}

const MarketService: IMarketService = {
  /**
   * 获取币价K线图数据
   * https://yapi.shengdiudiu.com/project/328/interface/api/4123
   */
  async getPriceHistory(params) {
    let { currentQuotePrice, dexTrades } = await instance.get<{
      currentQuotePrice: number;
      dexTrades: any[];
    }>(`/api/external/binCoin/priceHistory`, {
      params,
    });

    dexTrades = dexTrades.map((item: any) => {
      return {
        time:
          dayjs.utc(Object.values(item.timeInterval).find((item) => item) as string).valueOf() /
          1000,
        value: +item.quotePrice,
        open: +item.open_price,
        close: +item.close_price,
        max: +item.maximum_price,
        min: +item.minimum_price,
      };
    });

    dexTrades.push({
      time: +(dayjs().valueOf() / 1000).toFixed(0),
      value: currentQuotePrice,
      open: currentQuotePrice,
      close: currentQuotePrice,
      max: currentQuotePrice,
      min: currentQuotePrice,
    });

    return { currentPrice: currentQuotePrice, data: dexTrades };
  },
};

export default MarketService;
