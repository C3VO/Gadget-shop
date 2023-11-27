import Categories from "./Categories";
import Slider from "./ads/Slider";
import ImageSlider from "./ads/Slider";

function Catalog() {
  return (
    <div className="max-w-7xl mx-auto flex text-center py-6 bg-gray-100">
      <div className="basis-1/5 mx-2 bg-white">
        <Categories />
      </div>
      <div className="basis-3/5 mx-2 flex flex-col justify-center">
        <Slider />
      </div>
      <div className="basis-1/5 bg-white mx-2">Ad</div>
    </div>
  );
}

export default Catalog;
