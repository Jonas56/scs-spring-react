import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpLoginUser, httpRegisterUser } from "../../api/authService";

// get user from local storage
const user = JSON.parse(localStorage.getItem("loggedNoteappUser"));

// our initial state
const initialState = {
  user: user ? user : null,
  status: "idle",
  message: "",
};

// register user
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      return await httpRegisterUser(credentials);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.password ||
        error.response?.data?.email ||
        error?.message ||
        "Something went wrong. Please try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login user
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      return await httpLoginUser(credentials);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// logout
export const logout = createAsyncThunk("auth/logout", () =>
  localStorage.removeItem("loggedNoteappUser")
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
      })
      // login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        state.user = null;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
