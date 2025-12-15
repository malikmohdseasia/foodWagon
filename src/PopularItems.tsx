import BURGER from "./assets/PopularItems/burger.svg";
import CAKE from "./assets/PopularItems/cake.svg";
import DANCAKE from "./assets/PopularItems/dancake.svg";
import SANDWITCH from "./assets/PopularItems/sandwitch.svg";
import SOUP from "./assets/PopularItems/soup.svg";
import MAP from "./assets/PopularItems/map.svg";
import LEFTARROW from "./assets/PopularItems/Arrow Left.png";
import RIGHTARROW from "./assets/PopularItems/Arrow Right.png";

const PopularItems = () => {
  const foodItems = [
    {
      title: "Cheese Burger",
      img: BURGER,
      price: 3.88,
      location: "Burger Arena",
    },
    { title: "Toffe’s Cake", img: CAKE, price: 4, location: "Top Sticks" },
    { title: "Dancake", img: DANCAKE, price: 1.99, location: "Cake World" },
    {
      title: "Crispy Sandwitch",
      img: SANDWITCH,
      price: "3.00",
      location: "Fastfood Dine",
    },
    { title: "Thai  Soup", img: SOUP, price: 2.79, location: "Foody man" },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <div className="w-container mx-auto">
        <img
          src={LEFTARROW}
          alt="left arrow"
          className="absolute bottom-40 -left-5 h-25 hidden lg:flex cursor-pointer"
        />
        <div className="">
          <h1 className="text-[#212121] font-SourceSans font-bold text-center text-2xl my-10">
            Popular items
          </h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center text-center items-center gap-5  md:text-start
         
        "
          >
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <img src={item.img} alt="food" />
                <div className="my-2">
                  <p className="font-SourceSans font-bold text-[#424242]">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <img src={MAP} alt="" />
                    <p className="font-SourceSans text-[#FFB30E]">
                      {item.location}
                    </p>
                  </div>
                  <p className="font-SourceSans font-bold">${item.price}</p>
                </div>
                <button className="bg-[#F17228] text-white font-SourceSans font-bold w-[230px] md:w-[220px] lg:w-[180px] h-10 rounded-[5px] cursor-pointer">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <img
          src={RIGHTARROW}
          alt="right arrow"
          className="absolute bottom-40 -right-5 h-25 hidden lg:flex cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PopularItems;
