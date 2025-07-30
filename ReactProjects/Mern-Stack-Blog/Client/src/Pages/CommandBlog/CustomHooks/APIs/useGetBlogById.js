import axiosClient from "../../../../Clients/AxiosClient";
import { useQuery } from "@tanstack/react-query";
async function getBlogById(id) {
  const response = await axiosClient.get(`/blogs/${id}`);

  return response.data;
}

export default function useGetBlogById(id) {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
}
