import asyncHandler from "../middleware/asyncHandler.js";
import Blog from "../models/blogModel.js";
import TourCategory from "../models/tourCategoryModel.js";

//@desc    Fetch all blogs
//@route   GET /api/blogs
//@access   Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

//@desc    Fetch a blogs
//@route   GET /api/blogs/:id
//@access   Public
const getBlogsById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    return res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

//@desc    Create new blog
//@route   POST /api/blogs
//@access  Private/admin
// const createBlog = asyncHandler(async (req, res) => {
//   const { title, description, author, image, category } = req.body;

//   const blog = await Blog.create({
//     title,
//     description,
//     author,
//     image,
//     category,
//   });

//   if (blog) {
//     res.status(201).json({
//       _id: blog._id,
//       title: blog.title,
//       description: blog.description,
//       author: blog.author,
//       image: blog.image,
//       category: blog.category,
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid blog data");
//   }
// });
const createBlog = asyncHandler(async (req, res) => {
  const { title, description, author, imagePath, category } = req.body;

  if (!title || !description || !author || !imagePath || !category) {
    res.status(400);
    throw new Error('All fields are required');
  }

  const formattedImagePath = imagePath.replace(/\\/g, '/');

  const blog = await Blog.create({
    title,
    description,
    author,
    image: formattedImagePath,
    category,
  });

  if (blog) {
    res.status(201).json(blog);
  } else {
    res.status(400);
    throw new Error('Invalid blog data');
  }
});

// @desc    Update a blog
// @route   PUT /api/blog/:id
// @access  Private/Admin
// const updateBlog = asyncHandler(async (req, res) => {
//   const { title, description, author, category, imagePath } = req.body;

//   const blog = await Blog.findById(req.params.id);

//   const formattedImagePath = imagePath.replace(/\\/g, '/');

//   if (blog) {
//     blog.title = title;
//     blog.description = description;
//     blog.author = author;
//     blog.image = formattedImagePath;
//     blog.category = category;

//     const updatedBlog = await blog.save();
//     res.json(updatedBlog);
//   } else {
//     res.status(404);
//     throw new Error("Resource not found");
//   }
// });
const updateBlog = asyncHandler(async (req, res) => {
  const { title, description, author, category, image } = req.body;

  // console.log('Request body:', req.body); // Add this line to log the request body

  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Resource not found");
  }

  const formattedImagePath = image.replace(/\\/g, '/');

  blog.title = title;
  blog.description = description;
  blog.author = author;
  blog.image = formattedImagePath;
  blog.category = category;

  try {
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error); // Add this line to log the error
    res.status(500);
    throw new Error("Server error");
  }
});

// @desc    Delete a blog
// @route   DELETE /api/blog/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await Blog.deleteOne({ _id: blog._id });
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});




export { getBlogs, getBlogsById, createBlog, updateBlog, deleteBlog };
