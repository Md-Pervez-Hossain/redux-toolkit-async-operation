import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "./features/Posts/PostsSlice";
import Posts from "./components/posts/Posts";
import UsersSlice, { FetchUsers } from "./features/users/UsersSlice";
import { fetchPost } from "./features/post/PostSlice";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Post from "./components/post/Post";

function App() {
  const dispatch = useDispatch();
  // const postsData = useSelector((state) => state.posts);
  // const usersData = useSelector((state) => state.users);
  // const postData = useSelector((state) => state.post);
  // console.log(postData);
  // const { postId } = useParams();
  // console.log(postId);

  // // useEffect(() => {
  // //   dispatch(postFetch());
  // // }, [dispatch]);
  // // useEffect(() => {
  // //   dispatch(FetchUsers());
  // // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchPost(postId));
  // }, [dispatch, postId]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts></Posts>,
    },
    {
      path: "/posts",
      element: <Posts></Posts>,
    },
    {
      path: "/posts/:postId",
      element: <Post></Post>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
