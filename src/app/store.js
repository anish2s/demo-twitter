import { configureStore } from '@reduxjs/toolkit';
import twitterReducer from '../features/twitterSlice';

export const store = configureStore({
  reducer: {
    twitter: twitterReducer,
  },
});
