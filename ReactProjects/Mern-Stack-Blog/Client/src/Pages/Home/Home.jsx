import { useNavigate } from "react-router-dom";
import CommandBlog from "../CommandBlog";
import useGetBlogs from "./CustomHooks/API/useGetBlogs";
import useDeleteBlog from "../CommandBlog/CustomHooks/APIs/useDeleteBlog";

export default function Home() {
  const {
    data: { blogs } = { blogs: [] },
    isLoading,
    isFetching,
  } = useGetBlogs();
  const { mutate, isLoading: isDeleting } = useDeleteBlog();
  const navigate = useNavigate();
  if (isLoading) {
    return <p className="text-center py-10">Loading blogs…</p>;
  }
  if (!isLoading && blogs.length === 0) {
    return <p className="text-center py-10">Nothing to show</p>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {isFetching && (
        <p className="text-gray-500 text-sm italic mb-4 text-center">
          Updating…
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 flex-1 mb-4 line-clamp-3">
                {blog.description}
              </p>
            </div>
            <div className="flex gap-5 mb-5 mr-4 justify-end">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md 
               hover:bg-green-600 focus:outline-none focus:ring-2 
               focus:ring-green-300 transition transform active:translate-y-0.5"
                onClick={() => navigate(`/blogs/${blog._id}/edit`)}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md 
               hover:bg-red-600 focus:outline-none focus:ring-2 
               focus:ring-red-300 transition transform active:translate-y-0.5"
                onClick={() => mutate(blog._id)}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting" : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
