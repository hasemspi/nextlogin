import Footersection from "./componets/footer/page";
import Navber from "./componets/navber/page";
import HomeSlider from "./componets/slider/page";


const page = () => {
  return (
    <div className="container mx-auto">
      <Navber />
      <HomeSlider />
      <h1>Hello Home page how are you</h1>
      <Footersection/>
    </div>
  );
};

export default page;