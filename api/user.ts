import { IResponseUser, IResponseUserMany, IUserPayload } from "@/types";
import axiosInstance from "@/utils/axiosInstance";

export const getAllUsers = async (url: string) => {
  try {
    const res = await axiosInstance.get<IResponseUserMany>(url);
    const users = res.data.users;

    return users;
  } catch (error: any) {
    throw error;
  }
};

export const getUserById = async ([url, userId]: [string, string]) => {
  const res = await axiosInstance.get<IResponseUser>(`${url}/${userId}`);
  const user = res.data.user;

  return user;
};

export const createUser = async (payload: { name: string; email: string }) => {
  const res = await axiosInstance.post<IResponseUser>("/user", payload);
  const user = res.data.user;

  return user;
};

export const updateUserById = async (userId: string, payload: IUserPayload) => {
  const res = await axiosInstance.patch<IResponseUser>(
    `user/${userId}`,
    payload
  );
  const user = res.data.user;

  return user;
};

export const delUserById = async (userId: string) => {
  const res = await axiosInstance.delete<IResponseUser>(`user/${userId}`);
  const user = res.data.user;

  return user;
};
