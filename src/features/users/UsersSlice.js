import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const FetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const users = usersApi();
  return users;
});

const UsersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(FetchUsers.rejected, (state, action) => {
        state.isError = true;
        state.users = [];
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default UsersSlice.reducer;
