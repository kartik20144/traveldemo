// import React, { useState } from 'react';
// import axios from 'axios';

// const AddBlog = () => {
//   const [postName, setPostName] = useState('');
//   const [blogBanner, setBlogBanner] = useState(null);
//   const [blogDescription, setBlogDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [authorName, setAuthorName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Create FormData object to store form data including file
//       const formData = new FormData();
//       formData.append('title', postName);
//       formData.append('image', blogBanner);
//       formData.append('description', blogDescription);
//       formData.append('category', category);
//       formData.append('author', authorName);

//       console.log(formData)

//       // Make a POST request to your backend API to add the blog
//       const response = await axios.post('/api/admin/blog/addblog', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Important for file upload
//         },
//       });

//       console.log(response.data); // Assuming your backend returns the created blog data
//       // Reset form fields after successful submission
//       setPostName('');
//       setBlogBanner(null);
//       setBlogDescription('');
//       setCategory('');
//       setAuthorName('');

//     } catch (error) {
//       console.error('Error adding blog:', error);

//     }
//   };

//   return (
//     <div className="home-section flex flex-col items-center h-screen">
//       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
//         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Add blog</h1>
//         <p className="mb-3 text-[11px] sm:text-[16px]">
//         Airtport Hotels The Right Way To Start A Short Break Holiday
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="postName">Blog Name</label>
//             <input
//               type="text"
//               id="postName"
//               className="border border-gray-300 rounded-md p-2"
//               value={postName}
//               onChange={(e) => setPostName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="blogBanner">Upload Blog Banner</label>
//             <input
//               type="file"
//               id="blogBanner"
//               className="border border-gray-300 rounded-md p-2"
//               onChange={(e) => setBlogBanner(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="blogDescription">Blog Description</label>
//             <textarea
//               id="blogDescription"
//               className="border border-gray-300 rounded-md p-2"
//               value={blogDescription}
//               onChange={(e) => setBlogDescription(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="category">Select Category</label>
//             <select
//               id="category"
//               className="border border-gray-300 rounded-md p-2"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             >
//               <option value="">Select a category</option>
//               <option value="hotel">Hotel</option>
//               <option value="tour">Tour</option>
//               <option value="cabs">Cabs</option>
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="authorName">Author Name</label>
//             <input
//               type="text"
//               id="authorName"
//               className="border border-gray-300 rounded-md p-2"
//               value={authorName}
//               onChange={(e) => setAuthorName(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default AddBlog;

import React, { useState } from 'react';
import axios from 'axios';
import {toast} from "react-toastify"

const AddBlog = () => {
  const [postName, setPostName] = useState('');
  const [blogBanner, setBlogBanner] = useState(null);
  const [blogDescription, setBlogDescription] = useState('');
  const [category, setCategory] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Upload the image
      const formData = new FormData();
      formData.append('image', blogBanner);

      const uploadResponse = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imagePath = uploadResponse.data.imagePath;

      // Step 2: Create the blog post with the uploaded image path
      const blogData = {
        title: postName,
        description: blogDescription,
        category,
        author: authorName,
        imagePath,
      };

      const response = await axios.post('/api/admin/blog/addBlog', blogData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(response.data);

      // Reset form fields after successful submission
      setPostName('');
      setBlogBanner(null);
      setBlogDescription('');
      setCategory('');
      setAuthorName('');
      setError(null);
      toast.success("Blog added successfully");
    } catch (error) {
      console.error('Error adding blog:', error);
      setError('Error adding blog');
      toast.error("Error deleting blog");
    }
  };

  return (
    <div className="home-section flex flex-col items-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Add blog</h1>
        <p className="mb-3 text-[11px] sm:text-[16px]">
          
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="postName">Blog Name</label>
            <input
              type="text"
              id="postName"
              className="border border-gray-300 rounded-md p-2"
              value={postName}
              onChange={(e) => setPostName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="blogBanner">Upload Blog Banner</label>
            <input
              type="file"
              id="blogBanner"
              className="border border-gray-300 rounded-md p-2"
              onChange={(e) => setBlogBanner(e.target.files[0])}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="blogDescription">Blog Description</label>
            <textarea
              id="blogDescription"
              className="border border-gray-300 rounded-md p-2"
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="category">Select Category</label>
            <select
              id="category"
              className="border border-gray-300 rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="hotel">Hotel</option>
              <option value="tour">Tour</option>
              <option value="cabs">Cabs</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="authorName">Author Name</label>
            <input
              type="text"
              id="authorName"
              className="border border-gray-300 rounded-md p-2"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
