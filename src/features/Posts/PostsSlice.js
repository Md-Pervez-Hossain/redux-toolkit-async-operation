import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostApi } from "./PostApi";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const postFetch = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await PostApi();
  return posts;
});

const PostSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postFetch.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(postFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(postFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default PostSlice.reducer;
