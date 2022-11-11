import { createModel } from '@rematch/core';
import MainService, { IStatisticalDataRes } from 'services/main';

import { RootModel } from './index';

export default createModel<RootModel>()({
  state: {
    statisticalData: {} as IStatisticalDataRes,
    isMainVideoAnimateEnd: false,
  },
  effects: {
    async fetchStatisticalData() {
      const res = await MainService.getStatisticalData();

      this.save({
        statisticalData: res,
      });

      return res;
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
