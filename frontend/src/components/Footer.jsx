// Footer.js

// import React from "react";
import img3 from "../assets/s1.jpg";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4  w-full">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4  w-[90%] m">
        <div className="flex flex-col items-start mb-4 lg:mb-0 lg:mr-8">
          <h3 className="text-lg font-bold text-center">About Us</h3>
          <div>
            <img src={img3} className="rounded h-[7rem] mt-3" alt="" />
          </div>
          <p className="mt-2 ml-2   ">
            Some information about your company <br /> or website.
          </p>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0 lg:mr-8">
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="mt-2 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Hotel</a>
            </li>
            <li>
              <a href="#">Hire a cab</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-2 flex space-x-4 ml-[-.5rem]">
            <a href="#" className="text-white hover:text-gray-400 ">
              <i className="bx bxl-facebook text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="bx bxl-instagram text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="bx bxl-twitter text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
