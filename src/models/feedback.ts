import { createModel } from '@rematch/core';
import FeedbackService from 'services/feedback';

import { RootModel } from './index';

export default createModel<RootModel>()({
  state: {
    statisticalData: {} as {
      params: any;
    },
  },
  effects: {
    async saveFeedback(params) {
      return await FeedbackService.saveFeedback(params);
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
