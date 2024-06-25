import React from 'react'
import "boxicons/css/boxicons.min.css";
import alluserdata from "./AllUserData"
import "../Blog/AllBlog.css"

const UserSection = ({ profile_image, name, phone, email, country }) => (
  <tr className="border-b border-black text-[0.675rem] sm:text-sm">
    <td className="p-[0.15rem] sm:p-1 md:p-2 w-[56px] "><img className=" rounded-md " src={profile_image} alt="" /></td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{name}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{phone}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{email}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2 ">{country}</td>
    <td className="p-[0.15rem] sm:p-1 md:p-2  text-green-600">
      <a href="">
      <i class='bx bx-low-vision'></i>
      </a>
    </td>
    <td className="p-[0.15rem] sm:p-2 text-red-600 ">
      <a href="">
        <i className="bx bx-trash"></i>
      </a>
    </td>
  </tr>
);
const AllUser = () => {
  return (
    <div className="home-section flex flex-col items-center justify-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All User</h1>
        <p className="mb-3 text-[11px] sm:text-[16px]">
        Airtport Hotels The Right Way To Start A Short Break Holiday
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
            <thead>
              <tr>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">User</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Name</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Phone</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Email</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Country</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">View</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
              </tr>
            </thead>
            <tbody>
              {alluserdata.map((item) => (
                <UserSection
                  key={item.id}
                  profile_image={item.profile_image}
                  name={item.name}
                  phone={item.phone}
                  email={item.email}
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

export default AllUser
