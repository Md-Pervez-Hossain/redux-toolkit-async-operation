import { instance } from "../../utilitis/axois";
export const PostApi = async () => {
  const response = await instance.get("/posts");
  return response.data;
};
