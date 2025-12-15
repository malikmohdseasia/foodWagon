import SEARCHICON from "./assets/search/icon 5.svg";
import SLIDERBTN from "./assets/search/Slider Button.svg";
import IMG1 from "./assets/search/img1.svg";
import IMG2 from "./assets/search/img2.svg";
import IMG3 from "./assets/search/img3.svg";
import IMG4 from "./assets/search/img4.svg";
import IMG5 from "./assets/search/img5.svg";
import IMG6 from "./assets/search/img6.svg";

const SearchFood = () => {
  const foodItems = [
    { title: "Pizza", img: IMG1 },
    { title: "Burger", img: IMG2 },
    { title: "Noodles", img: IMG3 },
    { title: "Sub-sandiwch", img: IMG4 },
    { title: "Chowmein", img: IMG5 },
    { title: "Steak", img: IMG6 },
  ];

  return (
    <div className="w-container mx-auto my-20 bg-[#FEFAF1] p-2">
      <div className=" flex flex-col md:flex-row flex-wrap items-center md:justify-between md:mx-20 text-center md:text-start">
        <h1 className="my-10 text-[#212121] font-bold font-SourceSans text-[30px]">
          Search by Food
        </h1>
        <div className=" hidden md:flex justify-center items-center text-center">
          <p className="font-SourceSans font-semibold text-[#FFB30E] mb-3 cursor-pointer">
            View All
          </p>
          <img src={SEARCHICON} alt="search" className=" mx-2 mb-2" />
          <img
            src={SLIDERBTN}
            alt="slider"
            className="md:w-30 h-30 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 ld:grid-cols-6 gap-7 justify-items-cente mx-10 my-5">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4"
          >
            <img src={item.img} alt="food" />
            <p className="font-SourceSans font-bold text-[#424242]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFood;
