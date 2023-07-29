import axiosInstance from "@/utils/axiosInstance";

export const sendFeedback = async (payload: {
  name: string;
  type: string;
  message: string;
}) => {
  const response = await axiosInstance.post("/feedback", payload);

  return response.data;
};
