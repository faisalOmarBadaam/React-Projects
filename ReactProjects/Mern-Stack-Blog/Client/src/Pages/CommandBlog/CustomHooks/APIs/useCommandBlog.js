import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../Clients/AxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PostBlog = async ({ title, description }) => {
  const response = await axiosClient.post("/blogs", { title, description });
  return response.data;
};

const updateBlog = async ({ id, title, description }) => {
  const response = await axiosClient.put(`/blogs/${id}`, {
    title,
    description,
  });
  return response.data;
};
export default function useCommandBlog(id = null, isUpdate = false) {
  const qc = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ title, description }) => {
      return isUpdate
        ? updateBlog({ id, title, description })
        : PostBlog({ title, description });
    },
    onSuccess: () => {
      qc.invalidateQueries(["blogs"]);
      isUpdate && qc.invalidateQueries(["blogs", id]);

      navigate("/");
    },
    onError: (err) =>
      console.error(isUpdate ? "Update failed" : "Create failed", err),
  });
}
