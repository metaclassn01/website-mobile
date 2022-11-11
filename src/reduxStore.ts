import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import { models, RootModel } from 'models';

const loadingPlugin = createLoadingPlugin<RootModel, RootModel, any>({});

const store = init({
  models,
  plugins: [loadingPlugin],
});

export { store };

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
