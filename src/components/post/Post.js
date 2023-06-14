import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../features/post/PostSlice";

const Post = () => {
  const postData = useSelector((state) => state.post);
  console.log(postData);
  const dispatch = useDispatch();
  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);
  return (
    <div>
      <h2>post</h2>
    </div>
  );
};

export default Post;
