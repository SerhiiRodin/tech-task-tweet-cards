import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://64520ce4a2860c9ed400a177.mockapi.io';

export const getUsersAction = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.message);
      toast.error(`Error!!! Something went wrong. Use the service over time.`, {
        autoClose: 2000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
