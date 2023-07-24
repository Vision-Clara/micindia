import { IResponseUser } from "@/types";
import axiosInstance from "@/utils/axiosInstance";

//sign in
export const signIn = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post<IResponseUser>(
    "/auth/signin",
    data
  );

  return response.data.user;
};
