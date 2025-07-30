import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../../../Clients/AxiosClient";

async function DeleteBlog(id) {
  return await axiosClient.delete(`/blogs/${id}`);
}

export default function useDeleteBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => {
      return DeleteBlog(id);
    },
    onMutate: async (id) => {
      await qc.cancelQueries(["blogs"]);
      const previous = qc.getQueryData(["blogs"]);
      qc.setQueryData(["blogs"], (old) =>
        old.filter((blog) => blog._id !== id)
      );
      return { previous };
    },
    onSuccess: () => {
      qc.invalidateQueries(["blogs"]);
    },
    onSettled: () => {
      qc.invalidateQueries(["blogs"]);
    },
    onError: (err) => console.error("Delete failed", err),
  });
}
