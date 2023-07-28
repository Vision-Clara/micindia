import { IResponseUser } from "@/types";
import axiosInstance from "@/utils/axiosInstance";

//sign in
export const signIn = async (payload: { email: string; password: string }) => {
  const response = await axiosInstance.post<IResponseUser>(
    "/auth/signin",
    payload
  );

  return response.data.user;
};

//forget password
export const forgetPassword = async (payload: { email: string }) => {
  const response = await axiosInstance.post("/auth/forget-password", payload);

  return response.data;
};

//reset password
export const resetPassword = async (
  payload: {
    password: string;
    confirmPassword: string;
  },
  params: {
    id: string | null;
    token: string | null;
  }
) => {
  const response = await axiosInstance.post(
    `/auth/reset-password/${params.id}/${params.token}`,
    payload
  );

  return response.data;
};
