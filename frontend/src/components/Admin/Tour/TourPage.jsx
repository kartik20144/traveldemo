import { useParams } from 'react-router-dom';
import '../../Tour/tc.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TourPage = () => {
  const { id } = useParams(); // Get the type _id from URL

  const [tourData, setTourData] = useState(null);

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

  if (!tourData) {
    return <div>Loading...</div>; // Display loading state
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="page">
      <div className="top flex flex-col md:flex-row">
        <div className="image_slider w-full h-[285px] md:w-[738px] md:h-[386px]">
          <img src={`${backendUrl}${tourData.image}`} alt={tourData.name} />
        </div>
        <div className="context">
          <div className="w-full">
            {/* <h2 className='text-red-500'>Tour Details</h2> */}
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
      </div>
    </div>
  );
};

export default TourPage;
