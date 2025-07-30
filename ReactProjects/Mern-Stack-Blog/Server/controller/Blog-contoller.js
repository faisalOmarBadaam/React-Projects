import mongoose from "mongoose";
import Blog from "../model/Blog.js";

// —————————————— Read All ——————————————
export const fetchListOfBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) {
      return res.status(404).json({ message: "لا توجد تدوينات" });
    }
    return res.status(200).json({ blogs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "خطأ في الخادم" });
  }
};

// —————————————— Read One ——————————————
export const fetchBlogById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "معرّف غير صالح" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "التدوينة غير موجودة" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "خطأ في الخادم" });
  }
};

// —————————————— Create ——————————————
export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    // (بإمكانك إضافة تحقق على البيانات هنا)
    const newBlog = await Blog.create({ title, description });
    return res.status(201).json({ blog: newBlog });
  } catch (error) {
    console.error(error);
    // إذا كان خطأ تحقق من Mongoose:
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "خطأ في الخادم" });
  }
};

// —————————————— Update ——————————————
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "معرّف غير صالح" });
  }

  try {
    const updated = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "التدوينة غير موجودة" });
    }
    return res.status(200).json({ blog: updated });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: "خطأ في الخادم" });
  }
};

// —————————————— Delete ——————————————
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "معرّف غير صالح" });
  }

  try {
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "التدوينة غير موجودة" });
    }
    return res.status(200).json({ message: "تم حذف التدوينة بنجاح" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "خطأ في الخادم" });
  }
};
