import React from "react";
import DisplayPosts from "../DisplayPosts";

const Posts = ({ postsData }) => {
  //   console.log(postsData.posts);

  return (
    <div>
      {postsData.posts?.map((post) => (
        <DisplayPosts post={post}></DisplayPosts>
      ))}
    </div>
  );
};

export default Posts;
