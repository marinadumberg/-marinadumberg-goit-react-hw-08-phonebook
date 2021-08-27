import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contacts/contactsSlice';

const store = configureStore({
  reducer: {
    auth:persistReducer(authPersistConfig,authReducer),
    phoneBook: contactsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;