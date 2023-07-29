import axiosInstance from "@/utils/axiosInstance";

export const sendFeedback = async (payload: {
  name: string;
  type: string;
  messsage: string;
}) => {
  const response = await axiosInstance.post("/feedback", payload);

  return response.data;
};
