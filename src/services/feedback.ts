import { instance } from '../http';

interface IMainService {
  saveFeedback: (params: any) => Promise<any>;
}

const FeedbackService: IMainService = {
  async saveFeedback(params) {
    return instance.request({
      url: '/api/external/feedBack/submit',
      method: 'POST',
      data: params,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

export default FeedbackService;
