import React from "react";
import { usersInstance } from "../../utilitis/axois";

export const usersApi = async () => {
  const response = await usersInstance.get("/users");
  return response.data;
};
