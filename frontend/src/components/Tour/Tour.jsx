import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TourHero from "./TourHero";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import vid from "../../assets/video.mp4";
import "./TourHero.css";

// Card component for individual tour cards
const Card = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <Link to={`/tour/${props.id}`} className="text-gray-600 hover:text-black">
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 relative transform hover:scale-110 transition-transform duration-300">
        <img
          className="w-full h-46 sm:h-56 object-cover"
          src={props.image}
          alt={props.name}
        />
        <div className="px-4 py-2 sm:px-6 sm:py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <div className="flex items-center mb-2">
            <div className="text-gray-900 font-bold">
              {props.nights} Nights - {props.days} Days
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// TourSection component for displaying a section of tours
const TourSection = ({ data, category }) => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">{category}</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, i) => (
            <Card
              key={i}
              id={item._id}
              name={item.name}
              image={item.image}
              days={item.days}
              nights={item.nights}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Tour component for displaying the tours and search functionality
const Tour = () => {
  const [tourData, setTourData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState("");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get("/api/tour");
        setTourData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tour data:", error);
        setLoading(false);
      }
    };

    fetchTourData();
  }, []);

  const handleSearch = () => {
    const filtered = tourData
      .map((tour) => ({
        ...tour,
        types: tour.types.filter(
          (type) =>
            type.name.toLowerCase().includes(destination.toLowerCase()) &&
            type.price <= maxPrice &&
            (selectedDate === "" ||
              (new Date(type.availableFrom) <= new Date(selectedDate) &&
                new Date(type.availableTill) >= new Date(selectedDate)))
        ),
      }))
      .filter((tour) => tour.types.length > 0);
    setFilteredData(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home z-0">
        <div className="overlay"></div>
        <video src={vid} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your holiday</h1>
          </div>
          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex items-center">
                <input
                  type="text"
                  placeholder="Enter name here..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <GrLocation className="icon " />
              </div>
            </div>
            <div className="dataInput">
              <label htmlFor="date">Search your date:</label>
              <div className="input flex">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">₹{maxPrice}</h3>{" "}
                {/* Display current price */}
              </div>
              <div className="input flex">
                <input
                  type="range"
                  max="50000"
                  min="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="searchOptions flex">
              <button
                onClick={handleSearch}
                className=" text-white px-4 py-2 rounded-md"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
      {filteredData.map((tour, index) => (
        tour.types.length > 0 && (
          <TourSection key={index} data={tour.types} category={tour.category} />
        )
      ))}
    </>
  );
};

export default Tour;
