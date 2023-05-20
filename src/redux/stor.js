import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
