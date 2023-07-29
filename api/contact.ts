import axiosInstance from "@/utils/axiosInstance";

export const sendMessage = async (payload: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await axiosInstance.post("/contact", payload);

  return response.data;
};
