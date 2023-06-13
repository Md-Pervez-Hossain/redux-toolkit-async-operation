import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "./features/Posts/PostsSlice";
import Posts from "./components/posts/Posts";
import UsersSlice, { FetchUsers } from "./features/users/UsersSlice";

function App() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);
  const usersData = useSelector((state) => state.users);
  console.log(usersData);
  useEffect(() => {
    dispatch(postFetch());
  }, [dispatch]);
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Posts postsData={postsData}></Posts>
    </div>
  );
}

export default App;
