import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './StoreSlice';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;