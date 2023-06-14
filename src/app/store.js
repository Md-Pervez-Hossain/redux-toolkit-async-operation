import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/Posts/PostsSlice";
import usersReducer from "../features/users/UsersSlice";
import postReducer from "../features/post/PostSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    post: postReducer,
  },
});
