import {createStore} from 'redux';
import {rootReducer} from './reducers/rootReducers';
// export const store = createStore(rootReducer);
import {MMKV} from 'react-native-mmkv';
// import persistStore from 'redux-persist/es/persistStore';
import {persistStore, persistReducer} from 'redux-persist';

const MMKVstorage = new MMKV();

export const reduxStorage = {
  setItem: (key, value) => {
    MMKVstorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = MMKVstorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    MMKVstorage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export let persistor = persistStore(store);
