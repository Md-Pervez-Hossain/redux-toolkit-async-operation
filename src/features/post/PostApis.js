import { postInstance } from "../../utilitis/axois";
export const PostApi = async (postId) => {
  const response = await postInstance.get(`/posts/${postId}`);
  return response.data;
};
