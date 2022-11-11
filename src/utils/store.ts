import engine from 'store/src/store-engine';
import CookieStorage from 'store/storages/cookieStorage';
import LocalStorage from 'store/storages/localStorage';
import SessionStorage from 'store/storages/sessionStorage';

export const localStorage = engine.createStore([LocalStorage]);
export const sessionStorage = engine.createStore([SessionStorage]);
export const cookieStorage = engine.createStore([CookieStorage]);

export const store = {
  localStorage,
  sessionStorage,
  cookieStorage,
};

export default store;
