import axiosInstance from "@/utils/axiosInstance";

export const getAllEvents = async () => {
  const res = await axiosInstance.get("/event");
  const events = res.data.events;

  return events;
};
