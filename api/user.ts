import axiosInstance from "@/utils/axiosInstance";

export const getAllUsers = async () => {
  const res = await axiosInstance.get("/user");
  const users = res.data.users;

  return users;
};
