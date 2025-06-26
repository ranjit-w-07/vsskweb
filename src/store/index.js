import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
