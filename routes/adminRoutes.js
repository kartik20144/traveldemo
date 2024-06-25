import express from "express";
const router = express.Router();
import blogs from "../data/blogs.js";
import {
  getBlogs,
  getBlogsById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import {
  getTours,
  getTourById,
  deleteTour,
  getCategory,
  getCategoryById,
  deleteCategory,
  addCategory,
  updateCategory,
  updatefoundPackage,
  createPackage
} from "../controllers/tourController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/blog/allblog").get(protect, admin, getBlogs);
router.route("/blog/addBlog").post(protect, admin, createBlog);
router
  .route("/blog/:id")
  .delete(protect, admin, deleteBlog)
  .get(protect, admin, getBlogsById)
  .put(protect, admin, updateBlog);
// router.route("/blog/:blogId").put(protect, admin, updateBlog);
router.route("/tour/alltour").get(protect, admin, getTours);
router
  .route("/tour/alltour/:id")
  .get(protect, admin, getTourById)
  .delete(protect, admin, deleteTour);
router.route("/tour/category").get(protect, admin, getCategory).post(protect, admin, addCategory);
router.route("/tour/category/:id").get(protect, admin, getCategoryById).delete(protect, admin, deleteCategory).put(protect, admin, updateCategory);
router.route("/tour/edit/:id").get(protect, admin, getTourById).put(protect, admin, updatefoundPackage)
router.route("/tour").post(protect, admin, createPackage)
export default router;
