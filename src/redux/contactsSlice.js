import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { getUsersAction } from './operations';

export const initialState = {
  filter: '',
  users: [],
  isLoading: false,
  isError: null,
  followings: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addFollowing: (state, { payload }) => {
      state.followings.push(payload);
    },

    removeFollowing: (state, { payload }) => {
      state.followings = state.followings.filter(
        following => following !== payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getUsersAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsersAction.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(getUsersAction.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      });
  },
});

export const { addFollowing, removeFollowing } = usersSlice.actions;

const persistConfig = {
  key: 'followings',
  storage,
  whitelist: ['followings'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  usersSlice.reducer
);
