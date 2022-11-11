import { Models } from '@rematch/core';

import feedback from './feedback';
import main from './main';
import market from './market';
export interface RootModel extends Models<RootModel> {
  market: typeof market;
  main: typeof main;
  feedback: typeof feedback;
}

export const models: RootModel = { market, main, feedback };
