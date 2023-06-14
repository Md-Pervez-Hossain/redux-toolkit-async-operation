import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostApi } from "./PostApis";
// import PostApi from "../post/PostApi";

const initialState = {
  post: {},
  isloading: false,
  isError: false,
  error: "",
};

export const fetchPost = createAsyncThunk("post/fetchPost", async (postId) => {
  const post = await PostApi(postId);
  return post;
});

const PostSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.isloading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isloading = false;
        state.post = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isloading = false;
        state.post = {};
        state.isError = true;
        state.error = action.payload?.message;
      });
  },
});

export default PostSlice.reducer;
