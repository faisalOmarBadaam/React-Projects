import { useEffect, useRef } from "react";
import useCommandBlog from "./CustomHooks/APIs/useCommandBlog";
import { useParams } from "react-router-dom";
import useGetBlogById from "./CustomHooks/APIs/useGetBlogById";

export default function CommandBlog({ isUpdate = false }) {
  const { id } = useParams();
  const { data, isLoading: loadingData } = useGetBlogById(id);
  const { mutate, error, isError, isLoading } = useCommandBlog(id, isUpdate);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (data && !loadingData) {
      titleRef.current.value = data.blog.title;
      descriptionRef.current.value = data.blog.description;
    }
  }, [data]);
  function handleSubmit(e) {
    e.preventDefault();
    const blog = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };
    mutate(blog);
    e.currentTarget.reset();
  }
  if (isUpdate && loadingData) {
    return <div>Loading blog data…</div>;
  }
  if (isLoading) {
    return <div>wait to send data</div>;
  }
  if (isError) {
    return <div>something wrong {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-5">
      <h1 className="text-2xl font-bold">
        {isUpdate ? "Update Blog" : "Add Blog"}
      </h1>
      <form
        className="flex flex-col gap-5 w-[400px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          className="border px-3 py-2 rounded"
          ref={titleRef}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter Blog Description"
          className="border px-3 py-2 rounded"
          ref={descriptionRef}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading
            ? "Sending...."
            : isUpdate
            ? "Update Blog"
            : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}
