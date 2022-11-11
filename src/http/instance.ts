import { BaseUrl } from 'constants/api';
import { localStorage } from 'utils/store';

import Request from './Request';

export const instance = new Request({
  baseURL: BaseUrl,
  headers: {
    token: (typeof window !== 'undefined' && localStorage.get('token')) ?? '',
  },
});
