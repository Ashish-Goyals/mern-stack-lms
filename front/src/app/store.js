import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/authSlice.js';
import {authApi} from '../features/api/authApi';

// Define root reducer correctly
const rootReducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const appStore = configureStore ({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ().concat (authApi.middleware),
});
