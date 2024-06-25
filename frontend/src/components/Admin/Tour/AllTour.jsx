// // import React from 'react'
// // import "boxicons/css/boxicons.min.css";
// // import alltourdata from "./AllTourData"
// // import "../Blog/AllBlog.css"

// // const TourSection = ({ id, title, categories, country }) => (
// //     <tr className="border-b border-black text-[0.675rem] sm:text-sm">
// //       <td className="p-[0.15rem] sm:p-1 md:p-2 ">{id}</td>
// //       <td className="p-[0.15rem] sm:p-1 md:p-2 ">{title}</td>
// //       <td className="p-[0.15rem] sm:p-1 md:p-2 ">{categories}</td>
// //       <td className="p-[0.15rem] sm:p-1 md:p-2 ">{country}</td>
// //       <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
// //         <a href="">
// //         <i class='bx bx-low-vision'></i>
// //         </a>
// //       </td>
// //       <td className="p-[0.15rem] sm:p-1 md:p-2  text-red-600">
// //         <a href="">
// //           <i className="bx bx-edit "></i>
// //         </a>
// //       </td>
// //       <td className="p-[0.15rem] sm:p-2 text-red-600 ">
// //         <a href="">
// //           <i className="bx bx-trash"></i>
// //         </a>
// //       </td>
// //     </tr>
// //   );

// // const AllTour = () => {
// //   return (
// //     <div className="home-section flex flex-col items-center justify-center h-screen">
// //       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
// //         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Packages</h1>
// //         <p className="mb-3 text-[11px] sm:text-[16px]">
// //         Airtport Hotels The Right Way To Start A Short Break Holiday
// //         </p>
// //         <div className="overflow-x-auto">
// //           <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
// //             <thead>
// //               <tr>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S.No</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Packages</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Categories</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Country</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {alltourdata.map((item) => (
// //                 <TourSection
// //                   key={item.id}
// //                   id={item.id}
// //                   title={item.title}
// //                   categories={item.categories}
// //                   country={item.country}
// //                 />
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AllTour

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const TourSection = ({ tour }) => (
// //   <tr className="border-b border-black text-[0.675rem] sm:text-sm">
// //     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{tour._id}</td>
// //     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{tour.category}</td>
// //     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{tour.types[0].name}</td>
// //     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{tour.types[0].location}</td>
// //     <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
// //       <a href={`/tour/${tour._id}`}>
// //         <i className='bx bx-low-vision'></i>
// //       </a>
// //     </td>
// //     <td className="p-[0.15rem] sm:p-1 md:p-2  text-red-600">
// //       <a href={`/edit/${tour._id}`}>
// //         <i className="bx bx-edit"></i>
// //       </a>
// //     </td>
// //     <td className="p-[0.15rem] sm:p-2 text-red-600 ">
// //       <a href={`/delete/${tour._id}`}>
// //         <i className="bx bx-trash"></i>
// //       </a>
// //     </td>
// //   </tr>
// // );

// // const AllTour = () => {
// //   const [tours, setTours] = useState([]);

// //   useEffect(() => {
// //     const fetchTours = async () => {
// //       try {
// //         const response = await axios.get('/api/tour');
// //         setTours(response.data);
// //       } catch (error) {
// //         console.error('Error fetching tours:', error);
// //       }
// //     };

// //     fetchTours();
// //   }, []);

// //   return (
// //     <div className="home-section flex flex-col items-center justify-center h-screen">
// //       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
// //         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Packages</h1>
// //         <p className="mb-3 text-[11px] sm:text-[16px]">
// //           Airport Hotels: The Right Way To Start A Short Break Holiday
// //         </p>
// //         <div className="overflow-x-auto">
// //           <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
// //             <thead>
// //               <tr>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S.No</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Category</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Name</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Location</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
// //                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {tours.map((tour, index) => (
// //                 <TourSection key={index} tour={tour} />
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllTour;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TourSection = ({ type, index, id, onDelete }) => (
//   <tr className="border-b border-black text-[0.675rem] sm:text-sm">
//     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{index}</td>
//     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{type.name}</td>
//     <td className="p-[0.15rem] sm:p-1 md:p-2 ">{type.title}</td>
//            <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
//          <a href={`/admin/tour/alltour/${id}`} >
//          <i class='bx bx-low-vision'></i>
//          </a>
//        </td>
//        <td className="p-[0.15rem] sm:p-1 md:p-2  text-red-600">
//          <a href="">
//            <i className="bx bx-edit "></i>
//          </a>
//        </td>
//        <td className="p-[0.15rem] sm:p-2 text-red-600 ">
//        <button onClick={onDelete}>
//         <i className="bx bx-trash"></i>
//       </button>
//        </td>
//   </tr>
// );

// const AllTour = () => {
//   const [tours, setTours] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTours = async () => {
//       try {
//         const response = await axios.get('/api/admin/tour/alltour');
//         setTours(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchTours();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/admin/tour/alltour/${id}`, {
//         withCredentials: true,
//       });
//       // Update the state to remove the deleted blog
//       setTours(blogs.filter((tour) => tour._id !== id));
//       // toast.success("Blog deleted successfully")
//     } catch (error) {
//       setError(error.message);
//       // toast.error("Error deleting blog")
//     }
//   };

//   return (
//     <div className="home-section flex flex-col items-center justify-center h-screen">
//       <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
//         <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Packages</h1>
//         {/* <p className="mb-3 text-[11px] sm:text-[16px]">
//           Airport Hotels: The Right Way To Start A Short Break Holiday
//         </p> */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
//             <thead>
//               <tr>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S No.</th>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Title</th>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Category</th>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
//                 <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tours.map((tour) => (
//                 tour.types.map((type, index) => (
//                   <TourSection 
//                   key={type._id}
//                   index={index + 1}
//                   type={type}
//                   id={type._id}
//                   // title={blog.title}
//                   // categories={blog.category}
//                   // date={new Date(blog.createdAt).toLocaleDateString()}
//                   onDelete={() => handleDelete(type._id)}
//                   // blogId={blog._id}
//                   />
//                 ))
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTour;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TourSection = ({ type, index, id, onDelete }) => (
  <tr className="border-b border-black text-[0.675rem] sm:text-sm">
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{index}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{type.name}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{type.title}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
      <a href={`/admin/tour/alltour/${id}`}>
        <i className='bx bx-low-vision'></i>
      </a>
    </td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 text-red-600">
      <Link to={`/admin/tour/edit/${id}`}>
        <i className="bx bx-edit"></i>
      </Link>
    </td>
    <td className="p-[0.15rem] sm:p-2 text-red-600 ">
      <button onClick={onDelete}>
        <i className="bx bx-trash"></i>
      </button>
    </td>
  </tr>
);

const AllTour = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('/api/admin/tour/alltour');
        setTours(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/tour/alltour/${id}`, {
        withCredentials: true,
      });
      setTours((prevTours) => 
        prevTours.map((tour) => ({
          ...tour,
          types: tour.types.filter((type) => type._id !== id),
        })).filter((tour) => tour.types.length > 0)
      );
      toast.success("Package deleted successfully.")
    } catch (error) {
      setError(error.message);
      toast.error("Error deleting package.")
    }
  };

  let index = 1;

  return (
    <div className="home-section flex flex-col items-center justify-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Packages</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
              <thead>
                <tr>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S No.</th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Title</th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Category</th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
                  <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
                </tr>
              </thead>
              <tbody>
                {tours.map((tour) => 
                  tour.types.map((type) => (
                    <TourSection 
                      key={type._id}
                      index={index++}
                      type={type}
                      id={type._id}
                      onDelete={() => handleDelete(type._id)}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTour;
