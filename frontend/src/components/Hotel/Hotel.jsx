import React from 'react'
import { Link } from "react-router-dom";
import data from "./HotelData";
import HotelHero from './HotelHero'


const Card = (props) => {
  return (
    <Link
      to={`/hotel/${props.title}/${props.name}`}
      className="text-gray-600 hover:text-black"
    >
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
              {props.no_hotels}+ hotels
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Mountains = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4"> {data[0].title}</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data[0].types.map((item, i) => {
            return (
              // <h3>{item.name}</h3>
              <Card
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                no_hotels={item.no_hotels}
                days={item.days}
                title={item.title}
                // idd={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Beach = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4"> {data[1].title}</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data[1].types.map((item, i) => {
            return (
              <>
                {/* <h3>{item.name}</h3> */}
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  no_hotels={item.no_hotels}
                  days={item.days}
                  title={item.title}
                  // idd={item.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Desert = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4"> {data[2].title}</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data[2].types.map((item, i) => {
            return (
              <>
                {/* <h3>{item.name}</h3> */}
                <Card
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  no_hotels={item.no_hotels}
                  days={item.days}
                  title={item.title}
                  // idd={item.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Camping = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4"> {data[3].title}</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data[3].types.map((item, i) => {
            return (
              <>
                {/* <h3>{item.name}</h3> */}
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  no_hotels={item.no_hotels}
                  days={item.days}
                  title={item.title}
                  // idd={item.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Hotel = () => {
  return (
    <>
      <HotelHero />
      <Mountains key={data[0].id} />
      <Beach key={data[1].id} />
      <Desert key={data[2].id} />
      <Camping key={data[3].id} />
    </>
  )
}

export default Hotel
