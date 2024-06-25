import React from 'react'
import "boxicons/css/boxicons.min.css";
import allhotelsdata from "./AllHotels"
import "../Blog/AllBlog.css"

const HotelSection = ({ id, title, categories, country }) => (
    <tr className="border-b border-black text-[0.675rem] sm:text-sm">
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{id}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{title}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{categories}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{country}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
        <a href="">
        <i class='bx bx-low-vision'></i>
        </a>
      </td>
      <td className="p-[0.15rem] sm:p-1 md:p-2  text-red-600">
        <a href="">
          <i className="bx bx-edit "></i>
        </a>
      </td>
      <td className="p-[0.15rem] sm:p-2 text-red-600 ">
        <a href="">
          <i className="bx bx-trash"></i>
        </a>
      </td>
    </tr>
  );

const AllHotel = () => {
  return (
    <div className="home-section flex flex-col items-center justify-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Hotels</h1>
        <p className="mb-3 text-[11px] sm:text-[16px]">
        Airtport Hotels The Right Way To Start A Short Break Holiday
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
            <thead>
              <tr>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S.No</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Hotels</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Categories</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Country</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allhotelsdata.map((item) => (
                <HotelSection
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  categories={item.categories}
                  country={item.country}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllHotel
