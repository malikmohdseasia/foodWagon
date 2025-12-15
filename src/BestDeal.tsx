import IMG1 from "./assets/bigdeal/Image1.svg";
import IMG2 from "./assets/bigdeal/Image2.svg";
import IMG3 from "./assets/bigdeal/image3.svg";
import RIGHT from "./assets/bigdeal/RIGHT.svg";

const BestDeal = () => {
  const items = [
    {
      title: "Best deals",
      title2: "Crispy Sandwiches",
      description:
        "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
      img: IMG1,
    },
    {
      title: "Celebrate parties with",
      title2: "Fried Chicken",
      description:
        "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
      img: IMG2,
    },
    {
      title: "Wanna eat hot & spicy",
      title2: "Pizza?",
      description:
        "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
      img: IMG3,
    },
  ];

  return (
    <div className="w-container mx-auto my-10 flex flex-col gap-10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white flex-col-reverse shadow-2xl rounded-2xl overflow-hidden mx-auto flex items-center justify-center gap-10 hover:shadow-2xl transition-all 
        ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} 
        flex-col md:flex-row
      `}
        >
          <div className="md:basis-[30%] w-full flex flex-col items-start justify-center px-6 mt-10">
            <p className="text-[30px] font-bold text-[#353535] font-SourceSans">
              {item.title}
            </p>
            <p className="text-[30px] font-bold  font-SourceSans text-[#79B93C]">
              {item.title2}
            </p>
            <p className="text-[#616161B0] font-open-sans mt-5">
              {item.description}
            </p>

            <div className="bg-linear-to-r from-[#FFB800] to-[#FF8A00] text-white font-bold h-10 rounded-[10px] px-4 mb-3 w-full cursor-pointer flex items-center justify-center gap-2 mt-36">
              <span className="text-[15px] md:text-[12px] lg:text-[20px]">
                Proceed to order
              </span>
              <img src={RIGHT} alt="icon" className="object-contain" />
            </div>
          </div>

          <div className="md:basis-[70%] w-full flex justify-center">
            <img src={item.img} alt="" className=" object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDeal;
