// // export default EditPackage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const EditPackage = () => {
//   const { packageId } = useParams();
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [reviews, setReviews] = useState(0);
//   const [location, setLocation] = useState("");
//   const [days, setDays] = useState(0);
//   const [nights, setNights] = useState(0);
//   const [title, setTitle] = useState("");
//   const [inclusions, setInclusions] = useState([]);
//   const [inclusionInput, setInclusionInput] = useState("");
//   const [tourPlan, setTourPlan] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPackage = async () => {
//       if (packageId) {
//         try {
//           const { data } = await axios.get(`/api/admin/tour/edit/${packageId}`);
//           setName(data.name);
//           setDescription(data.description);
//           setImage(data.image);
//           setPrice(data.price);
//           setRating(data.rating);
//           setReviews(data.reviews);
//           setLocation(data.location);
//           setDays(data.days);
//           setNights(data.nights);
//           setTitle(data.title);
//           setInclusions(data.inclusions);
//           setTourPlan(data.tourPlan);
//         } catch (error) {
//           console.error("Error fetching package:", error);
//           setError("Error fetching package data");
//         }
//       }
//     };

//     fetchPackage();
//   }, [packageId]);

//   const handleAddInclusion = () => {
//     setInclusions([...inclusions, inclusionInput]);
//     setInclusionInput("");
//   };

//   const handleRemoveInclusion = (index) => {
//     const updatedInclusions = [...inclusions];
//     updatedInclusions.splice(index, 1);
//     setInclusions(updatedInclusions);
//   };

//   const handleAddTourPlan = () => {
//     setTourPlan([...tourPlan, { day: tourPlan.length + 1, name: "", description: "" }]);
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
//       let imagePath = image;

//       if (typeof image === "object") {
//         const formData = new FormData();
//         formData.append("image", image);

//         console.log("FormData before sending:", formData.get("image"));

//         const uploadResponse = await axios.post("/api/upload", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         imagePath = uploadResponse.data.imagePath;
//       }

//       const packageData = {
//         name,
//         description,
//         image: imagePath,
//         price,
//         rating,
//         reviews,
//         location,
//         days,
//         nights,
//         title,
//         inclusions,
//         tourPlan,
//       };

//       await axios.put(`/api/admin/tour/edit/${packageId}`, packageData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       setError(null);
//       toast.success("Package edited successfully");
//     } catch (error) {
//       console.error("Error updating package:", error);
//       setError("Error updating package");
//       toast.error("Error editing package");
//     }
//   };

//   return (
//     <div className="home-section flex flex-col items-center h-screen">
//       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
//         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Edit Package</h1>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="name">Package Name</label>
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
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="price">Price</label>
//             <input
//               type="number"
//               id="price"
//               className="border border-gray-300 rounded-md p-2"
//               value={price}
//               onChange={(e) => setPrice(parseFloat(e.target.value))}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="rating">Rating</label>
//             <input
//               type="number"
//               step="0.1"
//               id="rating"
//               className="border border-gray-300 rounded-md p-2"
//               value={rating}
//               onChange={(e) => setRating(parseFloat(e.target.value))}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="mb-2 font-medium" htmlFor="reviews">Reviews</label>
//             <input
//               type="number"
//               id="reviews"
//               className="border border-gray-300 rounded-md p-2"
//               value={reviews}
//               onChange={(e) => setReviews(parseInt(e.target.value, 10))}
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
//             type="number"
//             id="days"
//             className="border border-gray-300 rounded-md p-2"
//             value={days}
//             onChange={(e) => setDays(parseInt(e.target.value, 10))}
//             required
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-2 font-medium" htmlFor="nights">Nights</label>
//           <input
//             type="number"
//             id="nights"
//             className="border border-gray-300 rounded-md p-2"
//             value={nights}
//             onChange={(e) => setNights(parseInt(e.target.value, 10))}
//             required
//           />
//         </div>
//         <div className="flex flex-col space-y-4">
//           <label className="mb-2 font-medium" htmlFor="inclusions">Inclusions</label>
//           <div className="flex">
//             <input
//               type="text"
//               id="inclusions"
//               className="border border-gray-300 rounded-md p-2 flex-grow"
//               value={inclusionInput}
//               onChange={(e) => setInclusionInput(e.target.value)}
//             />
//             <button
//               type="button"
//               className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ml-2"
//               onClick={handleAddInclusion}
//             >
//               Add Inclusion
//             </button>
//           </div>
//           <ul className="list-disc pl-5">
//             {inclusions.map((inclusion, index) => (
//               <li key={index}>
//                 {inclusion}
//                 <button
//                   type="button"
//                   className="text-red-600 font-medium ml-2"
//                   onClick={() => handleRemoveInclusion(index)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <label className="mb-2 font-medium">Tour Plan</label>
//           {tourPlan.map((plan, index) => (
//             <div key={index} className="border border-gray-300 rounded-md p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold">Day {plan.day}</h3>
//                 <button
//                   type="button"
//                   onClick={() => setTourPlan(tourPlan.filter((_, i) => i !== index))}
//                   className="text-red-600 font-medium hover:underline"
//                 >
//                   Remove Day
//                 </button>
//               </div>
//               <div className="flex flex-col space-y-4">
//                 <label className="mb-2 font-medium" htmlFor={`day-name-${index}`}>Name</label>
//                 <input
//                   type="text"
//                   id={`day-name-${index}`}
//                   className="border border-gray-300 rounded-md p-2"
//                   value={plan.name}
//                   onChange={(e) => handleTourPlanChange(index, "name", e.target.value)}
//                   required
//                 />
//                 <label className="mb-2 font-medium" htmlFor={`day-description-${index}`}>Description</label>
//                 <textarea
//                   id={`day-description-${index}`}
//                   className="border border-gray-300 rounded-md p-2"
//                   value={plan.description}
//                   onChange={(e) => handleTourPlanChange(index, "description", e.target.value)}
//                   required
//                 ></textarea>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//             onClick={handleAddTourPlan}
//           >
//             Add Day
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   </div>
//   )}

// export default EditPackage;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPackage = () => {
  const { packageId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [location, setLocation] = useState("");
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);
  const [title, setTitle] = useState("");
  const [inclusions, setInclusions] = useState([]);
  const [inclusionInput, setInclusionInput] = useState("");
  const [tourPlan, setTourPlan] = useState([]);
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableTill, setAvailableTill] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      if (packageId) {
        try {
          const { data } = await axios.get(`/api/admin/tour/edit/${packageId}`);
          setName(data.name);
          setDescription(data.description);
          setImage(data.image);
          setPrice(data.price);
          setRating(data.rating);
          setReviews(data.reviews);
          setLocation(data.location);
          setDays(data.days);
          setNights(data.nights);
          setTitle(data.title);
          setInclusions(data.inclusions);
          setTourPlan(data.tourPlan);
          const formattedFromDate = data.availableFrom.split('T')[0];
          const formattedTillDate = data.availableTill.split('T')[0];
  
          setAvailableFrom(formattedFromDate);
          setAvailableTill(formattedTillDate);
        } catch (error) {
          console.error("Error fetching package:", error);
          setError("Error fetching package data");
        }
      }
    };

    fetchPackage();
  }, [packageId]);

  const handleAddInclusion = () => {
    setInclusions([...inclusions, inclusionInput]);
    setInclusionInput("");
  };

  const handleRemoveInclusion = (index) => {
    const updatedInclusions = [...inclusions];
    updatedInclusions.splice(index, 1);
    setInclusions(updatedInclusions);
  };

  const handleAddTourPlan = () => {
    setTourPlan([...tourPlan, { day: tourPlan.length + 1, name: "", description: "" }]);
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
      let imagePath = image;

      if (typeof image === "object") {
        const formData = new FormData();
        formData.append("image", image);

        // console.log("FormData before sending:", formData.get("image"));

        const uploadResponse = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imagePath = uploadResponse.data.imagePath;
      }

      const packageData = {
        name,
        description,
        image: imagePath,
        price,
        rating,
        reviews,
        location,
        days,
        nights,
        title,
        inclusions,
        tourPlan,
        availableFrom,
        availableTill,
      };

      await axios.put(`/api/admin/tour/edit/${packageId}`, packageData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setError(null);
      toast.success("Package edited successfully");
    } catch (error) {
      console.error("Error updating package:", error);
      setError("Error updating package");
      toast.error("Error editing package");
    }
  };

  return (
    <div className="home-section flex flex-col items-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">Edit Package</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="name">Package Name</label>
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
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded-md p-2"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="rating">Rating</label>
            <input
              type="number"
              step="0.1"
              id="rating"
              className="border border-gray-300 rounded-md p-2"
              value={rating}
              onChange={(e) => setRating(parseFloat(e.target.value))}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="reviews">Reviews</label>
            <input
              type="number"
              id="reviews"
              className="border border-gray-300 rounded-md p-2"
              value={reviews}
              onChange={(e) => setReviews(parseInt(e.target.value, 10))}
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
              type="number"
              id="days"
              className="border border-gray-300 rounded-md p-2"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value, 10))}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="nights">Nights</label>
            <input
              type="number"
              id="nights"
              className="border border-gray-300 rounded-md p-2"
              value={nights}
              onChange={(e) => setNights(parseInt(e.target.value, 10))}
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
                <li key={index}>
                  {inclusion}
                  <button
                    type="button"
                    className="text-red-600 font-medium ml-2"
                    onClick={() => handleRemoveInclusion(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <label className="mb-2 font-medium">Tour Plan</label>
            {tourPlan.map((plan, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Day {plan.day}</h3>
                  <button
                    type="button"
                    onClick={() => setTourPlan(tourPlan.filter((_, i) => i !== index))}
                    className="text-red-600 font-medium hover:underline"
                  >
                    Remove Day
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="mb-2 font-medium" htmlFor={`day-name-${index}`}>Name</label>
                  <input
                    type="text"
                    id={`day-name-${index}`}
                    className="border border-gray-300 rounded-md p-2"
                    value={plan.name}
                    onChange={(e) => handleTourPlanChange(index, "name", e.target.value)}
                    required
                  />
                  <label className="mb-2 font-medium" htmlFor={`day-description-${index}`}>Description</label>
                  <textarea
                    id={`day-description-${index}`}
                    className="border border-gray-300 rounded-md p-2"
                    value={plan.description}
                    onChange={(e) => handleTourPlanChange(index, "description", e.target.value)}
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
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPackage;
