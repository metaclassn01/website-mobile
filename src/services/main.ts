import { LineChartType } from 'constants/enum';

import { instance } from '../http';

interface IMainService {
  getStatisticalData: () => Promise<any>;
}

export type IStatisticalDataRes = {
  WKTPrice: string;
  totalCourse: number;
  userTotalCount: number;
  wktleft: string;
  wktoutput: string;
  wktprice: number;
};

const MainService: IMainService = {
  async getStatisticalData() {
    let res = await instance.get<IStatisticalDataRes>(`/api/external/statistics/common`);
    return res || {};
  },
};

export default MainService;
