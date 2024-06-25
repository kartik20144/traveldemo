// import { useState } from "react";
// import "boxicons/css/boxicons.min.css";
// // import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <header className="bg-white fixed w-full  shadow-md z-10">
//       <div className=" flex justify-between items-center h-[15vh]  w-[90%]  mx-auto  px-5 py-3  z-10 border-3">
//         <div className="rounded-lg overflow-hidden w-24 md:w-32 h-[3rem] md:h-[4rem]">
//           <img
//             className="w-full h-full object-cover"
//             src={logo}
//             alt="Logo"
//           />
//         </div>
//         <div className=" hidden md:flex flex-grow justify-center gap-10">
//           <Link to="/" className="text-gray-600 hover:text-black">
//             Home
//           </Link>
//           <Link to={"/tour"} className="text-gray-600 hover:text-black">
//             Tour Packages
//           </Link>
//           <a href="/cab" className="text-gray-600 hover:text-black">
//             Hired a cab
//           </a>
//           <a href="/hotel" className="text-gray-600 hover:text-black">
//             Hotels
//           </a>
//           <Link to="/blog" className="text-gray-600 hover:text-black">
//             Blogs
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <a
//             href="#"
//             className="border-2 border-black rounded-full p-2 text-gray-600 hover:text-black"
//           >
//             <i className="bx bxs-user pl-2"></i> My Account
//           </a>
//         </div>
//         <div className="md:hidden z-[9999999999999999999]">
//           <button id="mobile-menu-toggle" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? (
//               <i className="bx bx-x text-3xl text-white"></i>
//             ) : (
//               <i className="bx bx-menu text-3xl"></i>
//             )}
//           </button>
//         </div>
//         {isMobileMenuOpen && (
//           <div
//             id="mobile-menu"
//             className={`md:hidden z-[9999] bg-gray-700 absolute top-0 right-0 bottom-0  flex flex-col items-center justify-center h-[100vh] w-full transition-transform duration-1000 ease-in-out ${
//               isMobileMenuOpen ? "z-[9999999999999]" : ""
//             }`}
//           >
//             <div className=" text-center">
//               <a
//                 href="#"
//                 className="text-gray-300 block py-2 px-4 hover:text-white"
//               >
//                 Home
//               </a>
//               <Link
//                 to={"/tour"}
//                 className="text-gray-300 block py-2 px-4 hover:text-white"
//               >
//                 Tour Packages
//               </Link>
//               <a
//                 href="#"
//                 className="text-gray-300 block py-2 px-4 hover:text-white"
//               >
//                 Hired a cab
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 block py-2 px-4 hover:text-white"
//               >
//                 Hotels
//               </a>
//               <Link
//                to={"/blog"}
//                 className="text-gray-300 block py-2 px-4 hover:text-white"
//               >
//                 Blogs
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/users/profile"); // Endpoint to fetch user profile
        setUser(data); // Assuming response contains user data when authenticated
      } catch (error) {
        console.error("Not authenticated as admin");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleAccountClick = () => {
    if (isLoggedIn) {
      // Navigate to the user's account page if logged in
      //navigate("/account");
    } else {
      // Navigate to the login page if not logged in
      navigate("/login");
    }
  };

  return (
    <header className="bg-white fixed w-full shadow-md z-10">
      <div className="flex justify-between items-center h-[15vh] w-[90%] mx-auto px-5 py-3 z-10 border-3">
        <div className="rounded-lg overflow-hidden w-24 md:w-32 h-[3rem] md:h-[4rem]">
          <img className="w-full h-full object-cover" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex flex-grow justify-center gap-10">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link to="/tour" className="text-gray-600 hover:text-black">
            Tour Packages
          </Link>
          <a href="/cab" className="text-gray-600 hover:text-black">
            Hire a Cab
          </a>
          <a href="/hotel" className="text-gray-600 hover:text-black">
            Hotels
          </a>
          <Link to="/blog" className="text-gray-600 hover:text-black">
            Blogs
          </Link>
        </div>
        <div className="flex items-center">
          {user ? (
            <button className="border-2 border-black rounded-full p-2 text-gray-600 hover:text-black">
              {user.firstName}
            </button>
          ) : (
            <button
              onClick={handleAccountClick}
              className="border-2 border-black rounded-full p-2 text-gray-600 hover:text-black"
            >
              <i className="bx bxs-user pl-2"></i> Login
            </button>
          )}

        </div>
        <div className="md:hidden z-[9999999999999999999]">
          <button id="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <i className="bx bx-x text-3xl text-white"></i>
            ) : (
              <i className="bx bx-menu text-3xl"></i>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden z-[9999] bg-gray-700 absolute top-0 right-0 bottom-0 flex flex-col items-center justify-center h-[100vh] w-full transition-transform duration-1000 ease-in-out ${
              isMobileMenuOpen ? "z-[9999999999999]" : ""
            }`}
          >
            <div className="text-center">
              <Link
                to="/"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/tour"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Tour Packages
              </Link>
              <a
                href="/cab"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Hire a Cab
              </a>
              <a
                href="/hotel"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Hotels
              </a>
              <Link
                to="/blog"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Blogs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
