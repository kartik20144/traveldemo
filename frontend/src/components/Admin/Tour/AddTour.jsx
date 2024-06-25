
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AddTour = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [price, setPrice] = useState('');
//   const [rating, setRating] = useState('');
//   const [reviews, setReviews] = useState('');
//   const [location, setLocation] = useState('');
//   const [days, setDays] = useState('');
//   const [nights, setNights] = useState('');
//   const [inclusions, setInclusions] = useState([]);
//   const [inclusionInput, setInclusionInput] = useState('');
//   const [tourPlan, setTourPlan] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('/api/admin/tour/category'); // Adjust the endpoint as needed
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleAddInclusion = () => {
//     setInclusions([...inclusions, inclusionInput]);
//     setInclusionInput('');
//   };

//   const handleAddTourPlan = () => {
//     setTourPlan([...tourPlan, { day: tourPlan.length + 1, name: '', description: '' }]);
//   };

//   const handleTourPlanChange = (index, field, value) => {
//     const updatedTourPlan = tourPlan.map((plan, i) =>
//       i === index ? { ...plan, [field]: value } : plan
//     );
//     setTourPlan(updatedTourPlan);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Step 1: Upload the image
//       const formData = new FormData();
//       formData.append('image', image);

//       const uploadResponse = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const imagePath = uploadResponse.data.imagePath;

//     const newTour = {
//       category: selectedCategory,
//       types: [
//         {
//           name,
//           description,
//           image: imagePath,
//           price: parseFloat(price),
//           rating: parseFloat(rating),
//           reviews: parseInt(reviews, 10),
//           location,
//           days: parseInt(days, 10),
//           nights: parseInt(nights, 10),
//           title: selectedCategory,
//           inclusions,
//           tourPlan,
//         },
//       ],
//     };

//     const response = await axios.post('/api/admin/tour', newTour, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log(newTour);
//     // Clear form fields after submission
//     setSelectedCategory('');
//     setName('');
//     setDescription('');
//     setImage(null);
//     setPrice('');
//     setRating('');
//     setReviews('');
//     setLocation('');
//     setDays('');
//     setNights('');
//     setInclusions([]);
//     setInclusionInput('');
//     setTourPlan([]);

//     toast.success("Package added successfully.")

//   }catch (error) {
//     console.error('Error adding tour:', error);
//     // setError('Error adding blog');
//     // toast.error("Error deleting blog");
//     toast.error("Error adding package.")
//   }
//     // Handle form submission logic, e.g., API call to save the new tour
//   };

//   return (
//     <div className="home-section flex flex-col items-center h-screen">
//       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
//         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Add Tour Package</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="category">Category</label>
//             <select
//               id="category"
//               className="border border-gray-300 rounded-md p-2"
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               required
//             >
//               <option value="" disabled>Select a category</option>
//               {categories.map((category) => (
//                 <option key={category._id} value={category.category}>
//                   {category.category}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="border border-gray-300 rounded-md p-2"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               className="border border-gray-300 rounded-md p-2"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="image">Upload Image</label>
//             <input
//               type="file"
//               id="image"
//               className="border border-gray-300 rounded-md p-2"
//               onChange={(e) => setImage(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="price">Price</label>
//             <input
//               type="text"
//               id="price"
//               className="border border-gray-300 rounded-md p-2"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="rating">Rating</label>
//             <input
//               type="text"
//               id="rating"
//               className="border border-gray-300 rounded-md p-2"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="reviews">Reviews</label>
//             <input
//               type="text"
//               id="reviews"
//               className="border border-gray-300 rounded-md p-2"
//               value={reviews}
//               onChange={(e) => setReviews(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="location">Location</label>
//             <input
//               type="text"
//               id="location"
//               className="border border-gray-300 rounded-md p-2"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="days">Days</label>
//             <input
//               type="text"
//               id="days"
//               className="border border-gray-300 rounded-md p-2"
//               value={days}
//               onChange={(e) => setDays(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="nights">Nights</label>
//             <input
//               type="text"
//               id="nights"
//               className="border border-gray-300 rounded-md p-2"
//               value={nights}
//               onChange={(e) => setNights(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-4">
//             <label className="mb-2 font-medium" htmlFor="inclusions">Inclusions</label>
//             <div className="flex">
//               <input
//                 type="text"
//                 id="inclusions"
//                 className="border border-gray-300 rounded-md p-2 flex-grow"
//                 value={inclusionInput}
//                 onChange={(e) => setInclusionInput(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ml-2"
//                 onClick={handleAddInclusion}
//               >
//                 Add Inclusion
//               </button>
//             </div>
//             <ul className="list-disc pl-5">
//               {inclusions.map((inclusion, index) => (
//                 <li key={index}>{inclusion}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex flex-col space-y-4">
//             <label className="mb-2 font-medium">Tour Plan</label>
//             {tourPlan.map((plan, index) => (
//               <div key={index} className="border border-gray-300 rounded-md p-4">
//                 <div className="flex flex-col mb-4">
//                   <label className="mb-2 font-medium" htmlFor={`day${index + 1}`}>Day {index + 1} Name</label>
//                   <input
//                     type="text"
//                     id={`day${index + 1}`}
//                     className="border border-gray-300 rounded-md p-2"
//                     value={plan.name}
//                     onChange={(e) => handleTourPlanChange(index, 'name', e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="mb-2 font-medium" htmlFor={`description${index + 1}`}>Description</label>
//                   <textarea
//                     id={`description${index + 1}`}
//                     className="border border-gray-300 rounded-md p-2"
//                     value={plan.description}
//                     onChange={(e) => handleTourPlanChange(index, 'description', e.target.value)}
//                     required
//                   ></textarea>
//                 </div>
//               </div>
//             ))}
//             <button
//               type="button"
//               className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//               onClick={handleAddTourPlan}
//             >
//               Add Day
//             </button>
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

// export default AddTour;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTour = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState('');
  const [location, setLocation] = useState('');
  const [days, setDays] = useState('');
  const [nights, setNights] = useState('');
  const [inclusions, setInclusions] = useState([]);
  const [inclusionInput, setInclusionInput] = useState('');
  const [tourPlan, setTourPlan] = useState([]);
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableTill, setAvailableTill] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/admin/tour/category'); // Adjust the endpoint as needed
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddInclusion = () => {
    setInclusions([...inclusions, inclusionInput]);
    setInclusionInput('');
  };

  const handleAddTourPlan = () => {
    setTourPlan([...tourPlan, { day: tourPlan.length + 1, name: '', description: '' }]);
  };

  const handleTourPlanChange = (index, field, value) => {
    const updatedTourPlan = tourPlan.map((plan, i) =>
      i === index ? { ...plan, [field]: value } : plan
    );
    setTourPlan(updatedTourPlan);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Upload the image
      const formData = new FormData();
      formData.append('image', image);

      const uploadResponse = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imagePath = uploadResponse.data.imagePath;

      const newTour = {
        category: selectedCategory,
        types: [
          {
            name,
            description,
            image: imagePath,
            price: parseFloat(price),
            rating: parseFloat(rating),
            reviews: parseInt(reviews, 10),
            location,
            days: parseInt(days, 10),
            nights: parseInt(nights, 10),
            title: selectedCategory,
            inclusions,
            tourPlan,
            availableFrom,
            availableTill,
          },
        ],
      };

      const response = await axios.post('/api/admin/tour', newTour, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(newTour);
      // Clear form fields after submission
      setSelectedCategory('');
      setName('');
      setDescription('');
      setImage(null);
      setPrice('');
      setRating('');
      setReviews('');
      setLocation('');
      setDays('');
      setNights('');
      setInclusions([]);
      setInclusionInput('');
      setTourPlan([]);
      setAvailableFrom('');
      setAvailableTill('');

      toast.success("Package added successfully.");

    } catch (error) {
      console.error('Error adding tour:', error);
      toast.error("Error adding package.");
    }
  };

  return (
    <div className="home-section flex flex-col items-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Add Tour Package</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="category">Category</label>
            <select
              id="category"
              className="border border-gray-300 rounded-md p-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="border border-gray-300 rounded-md p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              className="border border-gray-300 rounded-md p-2"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              className="border border-gray-300 rounded-md p-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="rating">Rating</label>
            <input
              type="text"
              id="rating"
              className="border border-gray-300 rounded-md p-2"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="reviews">Reviews</label>
            <input
              type="text"
              id="reviews"
              className="border border-gray-300 rounded-md p-2"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              className="border border-gray-300 rounded-md p-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="days">Days</label>
            <input
              type="text"
              id="days"
              className="border border-gray-300 rounded-md p-2"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="nights">Nights</label>
            <input
              type="text"
              id="nights"
              className="border border-gray-300 rounded-md p-2"
              value={nights}
              onChange={(e) => setNights(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="availableFrom">Available From</label>
            <input
              type="date"
              id="availableFrom"
              className="border border-gray-300 rounded-md p-2"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="availableTill">Available Till</label>
            <input
              type="date"
              id="availableTill"
              className="border border-gray-300 rounded-md p-2"
              value={availableTill}
              onChange={(e) => setAvailableTill(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="mb-2 font-medium" htmlFor="inclusions">Inclusions</label>
            <div className="flex">
              <input
                type="text"
                id="inclusions"
                className="border border-gray-300 rounded-md p-2 flex-grow"
                value={inclusionInput}
                onChange={(e) => setInclusionInput(e.target.value)}
              />
              <button
                type="button"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ml-2"
                onClick={handleAddInclusion}
              >
                Add Inclusion
              </button>
            </div>
            <ul className="list-disc pl-5">
              {inclusions.map((inclusion, index) => (
                <li key={index}>{inclusion}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <label className="mb-2 font-medium">Tour Plan</label>
            {tourPlan.map((plan, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4">
                <div className="flex flex-col mb-4">
                  <label className="mb-2 font-medium" htmlFor={`day${index + 1}`}>Day {index + 1} Name</label>
                  <input
                    type="text"
                    id={`day${index + 1}`}
                    className="border border-gray-300 rounded-md p-2"
                    value={plan.name}
                    onChange={(e) => handleTourPlanChange(index, 'name', e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium" htmlFor={`description${index + 1}`}>Description</label>
                  <textarea
                    id={`description${index + 1}`}
                    className="border border-gray-300 rounded-md p-2"
                    value={plan.description}
                    onChange={(e) => handleTourPlanChange(index, 'description', e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleAddTourPlan}
            >
              Add Day
            </button>
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

export default AddTour;
