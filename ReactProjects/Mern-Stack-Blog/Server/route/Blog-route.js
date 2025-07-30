import express from "express";
import {
  fetchListOfBlogs,
  fetchBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controller/Blog-contoller.js";

const router = express.Router();

router.get("/", fetchListOfBlogs);
router.get("/:id", fetchBlogById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
