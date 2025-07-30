import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../../../Clients/AxiosClient";

const getBlogs = async () => {
  const response = await axiosClient.get("/blogs");
  return response.data;
};

export default function useGetBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    ...{
      refetchOnWindowFocus: true,
    },
  });
}
