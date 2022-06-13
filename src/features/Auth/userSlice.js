import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk("users/register", async (payload) => {
  //Call Api for register
  const data = await userApi.register(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  //return user data
  console.log(data.data.user);
  return data.data.user;
});
export const login = createAsyncThunk("users/login", async (payload) => {
  //Call Api for register
  const data = await userApi.login(payload);
  //save data to local storage

  localStorage.setItem(StorageKeys.TOKEN, data.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.user));
  //return user data
  return data.data.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
