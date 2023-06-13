import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/Posts/PostsSlice";
import usersReducer from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
