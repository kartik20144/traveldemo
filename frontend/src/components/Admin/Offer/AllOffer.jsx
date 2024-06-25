import React from 'react'
import "boxicons/css/boxicons.min.css";
import allofferdata from "./AllOfferdata"
import "../Blog/AllBlog.css"


const OfferSection = ({ id, event, offers, date, categories }) => (
    <tr className="border-b border-black text-[0.675rem] sm:text-sm">
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{id}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{event}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{offers}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{date}</td>
      <td className="p-[0.15rem] sm:p-1 md:p-2 ">{categories}</td>
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
const AllOffer = () => {
  return (
    <div className="home-section flex flex-col items-center justify-center h-screen">
      <div className="bg-white m-5 rounded-sm md:w-4/5 w-full py-10 px-2 md:p-10 overflow-y-auto">
        <h1 className="text-[1.5rem] sm:text-3xl font-semibold">All Offers</h1>
        <p className="mb-3 text-[11px] sm:text-[16px]">
        Airtport Hotels The Right Way To Start A Short Break Holiday
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-separate" style={{ borderSpacing: "0 10px" }}>
            <thead>
              <tr>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">S.No</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Event</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Offers</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Date</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Categories</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Edit</th>
                <th className="p-[0.15rem] sm:p-1 md:p-2 text-left text-[11px] sm:text-[16px]">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allofferdata.map((item) => (
                <OfferSection
                  key={item.id}
                  id={item.id}
                  event={item.event}
                  offers={item.offers}
                  date={item.date}
                  categories={item.categories}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllOffer
