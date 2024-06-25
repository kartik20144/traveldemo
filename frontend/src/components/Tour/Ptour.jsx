import { useParams } from 'react-router-dom';
import './tc.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Ptour = () => {
  const { id } = useParams(); // Get the type _id from URL

  const [tourData, setTourData] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const { data } = await axios.get(`/api/tour/${id}`);
        setTourData(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchTour();
  }, [id]); // Fetch data when id changes

  const increment = () => {
    setNumberOfPersons((prev) => prev + 1);
  };

  const decrement = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons((prev) => prev - 1);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  if (!tourData) {
    return <div>Loading...</div>; // Display loading state
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="page">
      <div className="top flex flex-col md:flex-row">
        <div className="image_slider w-full h-[285px] md:w-[738px] md:h-[386px]">
          <img src={tourData.image} alt={tourData.name} />
        </div>
        <div className="context">
          <div className="w-full">
            <h2>{tourData.name}</h2>
            <p>{tourData.price} Per Person</p>
            <hr />
            <h3>Available From: {new Date(tourData.availableFrom).toLocaleDateString()}</h3>
            <h3>Available Till: {new Date(tourData.availableTill).toLocaleDateString()}</h3>
            <hr />
            <h3>Inclusions:</h3>
            <ul>
              {tourData.inclusions.map((inclusion, i) => (
                <li key={i}>
                  <span className="text-green-500" role="img" aria-label="tick">
                    &#10003;
                  </span>{' '}
                  {inclusion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="tour_plan">
          <h2>Tour Plan</h2>
          {tourData.tourPlan.map((day, i) => (
            <div className="day" key={i}>
              <h3>
                Day {day.day}: {day.name}
              </h3>
              <p>{day.description}</p>
            </div>
          ))}
        </div>
        <div className="book bg-gray-200 p-8 rounded-lg w-96">
          <h2>Book this Tour</h2>
          <div className="flex items-center mb-4 mt-4">
            <label htmlFor="date" className="mr-2">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="bg-gray-300 px-2 py-1 rounded-md mr-2 cursor-pointer"
            />
          </div>
          <div className="date flex items-center mb-5">
            <h4 className="pr-5">Person: </h4>
            <button
              onClick={decrement}
              className="bg-gray-300 px-2 py-1 rounded-md mr-2"
            >
              -
            </button>
            <span>{numberOfPersons}</span>
            <button
              onClick={increment}
              className="bg-gray-300 px-2 py-1 rounded-md ml-2"
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ptour;
