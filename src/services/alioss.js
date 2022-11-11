import { stringify } from 'qs';

import { instance } from '../http';

// 获取token - https://yapi.shengdiudiu.com/project/328/interface/api/3853
export async function getToken(params) {
  return instance.get(
    `/api/external/oss/token?${stringify({
      scene: 0,
      ...params,
    })}`
  );
}
