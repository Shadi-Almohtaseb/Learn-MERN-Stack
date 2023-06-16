// src/features/auth/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/auth",
        {
          email,
          password,
        }
      );
      const user = response.data;
      console.log(user);
      return user;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

// Async thunk for signup
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/users", {
        name,
        email,
        password,
      });
      // const loginResponse = await axios.post(
      //   "http://localhost:8000/api/users/auth",
      //   {
      //     userName,
      //     password,
      //   }
      // );
      const createdUser = response.data;
      return createdUser;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(signup.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;
