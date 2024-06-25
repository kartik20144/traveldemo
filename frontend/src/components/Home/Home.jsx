import Hero from "../Hero";
import WhyChooseUs from "../Whyus";
import Testimonial from "../Testimonial";
import Services from "../Services";
import Recommendation_tour from "../Recommendation_tour";
import Recommendation_hotel from "../Recommendation_hotel";

function Home() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Hero />
        <WhyChooseUs />
        <Testimonial />
        <Services />
        <Recommendation_tour />
        <Recommendation_hotel />
      </div>
    </>
  );
}

export default Home;
