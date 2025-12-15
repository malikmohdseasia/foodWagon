import IMG1 from "./assets/FeaturedRestaurants/Image1.svg";
import IMG2 from "./assets/FeaturedRestaurants/Image 2.svg";
import IMG3 from "./assets/FeaturedRestaurants/Image 3.svg";
import IMG4 from "./assets/FeaturedRestaurants/Image 4.svg";
import IMG5 from "./assets/FeaturedRestaurants/Image 5.svg";
import IMG6 from "./assets/FeaturedRestaurants/Image 6.svg";
import IMG7 from "./assets/FeaturedRestaurants/Image 7.svg";
import IMG8 from "./assets/FeaturedRestaurants/Image 8.svg";

import IMGT1 from "./assets/FeaturedRestaurants/titleImage/imageT1.png";
import IMGT2 from "./assets/FeaturedRestaurants/titleImage/imaget2.png";
import IMGT3 from "./assets/FeaturedRestaurants/titleImage/imaget3.png";
import IMGT4 from "./assets/FeaturedRestaurants/titleImage/imaget4.png";
import IMGT5 from "./assets/FeaturedRestaurants/titleImage/imaget5.png";
import IMGT6 from "./assets/FeaturedRestaurants/titleImage/imaget6.png";
import IMGT7 from "./assets/FeaturedRestaurants/titleImage/imaget7.png";
import IMGT8 from "./assets/FeaturedRestaurants/titleImage/imaget8.png";

import lableIMG1 from "./assets/FeaturedRestaurants/lable/Badge1.svg";
import lableIMG2 from "./assets/FeaturedRestaurants/lable/Badge 2.svg";
import lableIMG3 from "./assets/FeaturedRestaurants/lable/Badge 3.svg";
import lableIMG4 from "./assets/FeaturedRestaurants/lable/Badge 4.svg";
import lableIMG5 from "./assets/FeaturedRestaurants/lable/Badge 5.svg";
import lableIMG6 from "./assets/FeaturedRestaurants/lable/Badge 6.svg";
import lableIMG7 from "./assets/FeaturedRestaurants/lable/Badge 7.svg";
import lableIMG8 from "./assets/FeaturedRestaurants/lable/Badge 8.svg";

import STAR from "./assets/FeaturedRestaurants/star.svg";

const FeaturedRestaurants = () => {
  const featuredItems = [
    {
      title: "Foodworld",
      img: IMG1,
      timage: IMGT1,
      rate: 46,
      label: lableIMG1,
      btn: "Opens tomorrow",
    },
    {
      title: "Pizzahub",
      img: IMG2,
      timage: IMGT2,
      rate: 40,
      label: lableIMG2,
      btn: "Opens tomorrow",
    },
    {
      title: "Donuts hut",
      img: IMG3,
      timage: IMGT3,
      rate: 20,
      label: lableIMG3,
      btn: "Open Now",
    },
    {
      title: "Taco bell",
      img: IMG4,
      timage: IMGT4,
      rate: 50,
      label: lableIMG4,
      btn: "Open Now",
    },
    {
      title: "Ruby Tuesday",
      img: IMG5,
      timage: IMGT5,
      rate: 26,
      label: lableIMG5,
      btn: "Open Now",
    },
    {
      title: "Kuakata Fried Chicken",
      img: IMG6,
      timage: IMGT6,
      rate: 53,
      label: lableIMG6,
      btn: "Open Now",
    },
    {
      title: "Red Square Pizza",
      img: IMG7,
      timage: IMGT7,
      rate: 45,
      label: lableIMG7,
      btn: "Open Now",
    },
    {
      title: "TacoMex",
      img: IMG8,
      timage: IMGT8,
      rate: 35,
      label: lableIMG8,
      btn: "Open Now",
    },
  ];

  return (
    <div className="w-container mx-auto my-10">
      <h1 className="font-SourceSans font-bold text-[#212121] text-[30px] text-center my-10">
        Featured Restaurants
      </h1>
      <div className="grid grid-cols-1 justify-items-center md:justify-start text-cente md:text-start items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-center">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center md:flex-wrap md:flex-col md:justify-center md:items-start transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt="featured"
              className="rounded-[11px] object-contain "
            />
            <div className="flex justify-center md:justify-start gap-4 my-2">
              <img src={item.timage} alt="" />
              <div className="">
                <p className="font-SourceSans font-semibold">{item.title}</p>
                <div className="flex gap-2">
                  <img src={STAR} alt="" className="object-contain" />
                  <p className="text-[#FFB30E]">{item.rate}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-5 sm:top-5 left-12  md:top-4 md:left-2 ">
              <img src={item.label} alt="" />
            </div>
            <div
              className={` text-center py-1 rounded-md font-bold w-[120px] text-[15px] ${
                item.btn === "Opens tomorrow"
                  ? "bg-[#F1722833] text-[#F17228] cursor-pointer"
                  : "bg-[#79B93C33] text-[#79B93C] cursor-pointer"
              }`}
            >
              {" "}
              {item.btn}
            </div>
          </div>
        ))}
      </div>
      <div className="m-auto w-40 h-[41px]">
        <button className=" w-50 h-[41px] rounded-[11px] my-10 bg-linear-to-r from-[#FFBA26] to-[#FF9A0E] text-white font-SourceSans font-bold cursor-pointer">
          View All
        </button>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
