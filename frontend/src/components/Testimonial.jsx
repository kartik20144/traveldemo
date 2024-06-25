// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons/css/boxicons.min.css";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      occupation: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
      stars: 5,
      image: "/image1.jpg",
    },
    {
      name: "Jane Smith",
      occupation: "Designer",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
      stars: 5,
      image: "/image1.jpg",
    },
    {
      name: "Jane Smith",
      occupation: "Designer",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
      stars: 5,
      image: "/image1.jpg",
    },
    {
      name: "Jane Smith",
      occupation: "Designer",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
      stars: 5,
      image: "/image1.jpg",
    },
    // Add more testimonials as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 py-16 ">
      <div className="mx-auto my-12 px-4 w-[90%] ">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold capitalize">
            What our clients say
          </h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-300 p-8 rounded-xl">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt=""
                  className="max-w-12 h-auto rounded-full mr-5"
                />
                <div>
                  <h3 className="text-3xl font-semibold capitalize">
                    {testimonial.name}
                  </h3>
                  <span className="text-gray-400 capitalize">
                    {testimonial.occupation}
                  </span>
                </div>
              </div>
              <p className="mt-5">{testimonial.content}</p>
              <div className="mt-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-yellow-500"></i>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
