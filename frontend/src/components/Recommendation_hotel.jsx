import h1_hotel from "../assets/h1.png";
// import p2_tour from "../assets/tour2.jpg";
// import p3_tour from "../assets/tour3.jpg";
// import p4_tour from "../assets/tour4.jpg";

let tour_data = [
  {
    id: 1,
    name: "Taj Hotel",
    image: h1_hotel,
    price: 9000,
    days: 10,
  },
  {
    id: 2,
    name: "Taj Hotel",
    image: h1_hotel,
    price: 9000,

    days: 10,
  },
  {
    id: 3,
    name: "Taj Hotel",
    image: h1_hotel,
    price: 9000,

    days: 10,
  },
  {
    id: 4,
    name: "Taj Hotel",
    image: h1_hotel,
    price: 9000,

    days: 10,
  },
];

// export default tour_data;

const Item = (props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 relative transform hover:scale-110 transition-transform duration-300">
      <img
        className="w-full h-46 sm:h-56 object-cover"
        src={props.image}
        alt={props.name}
      />
      <div className="px-4 py-2 sm:px-6 sm:py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <div className="flex flex-col  mb-2">
          <div className="text-gray-900 font-bold"> 
            Stay - {props.days} Days
          </div>
          <div className="text-gray-900 font-bold">price-₹{props.price}</div>
        </div>
      </div>
    </div>
  );
};

const Recommendation_hotel = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">Recommendation for Hotels</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tour_data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                days={item.days}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation_hotel;
