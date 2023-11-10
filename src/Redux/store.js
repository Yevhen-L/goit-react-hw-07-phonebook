import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const loggerMiddleware = store => next => action => {
  console.log('Попередній стан:', store.getState());
  console.log('Виконується дія:', action);
  next(action);
  console.log('Новий стан:', store.getState());
};
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware().concat(loggerMiddleware),
});

export const persistor = persistStore(store);
export default store;
