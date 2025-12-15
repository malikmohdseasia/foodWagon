import MAP from "./assets/howdoes/map.svg";
import ORDER from "./assets/howdoes/menu.svg";
import PAY from "./assets/howdoes/dollar.svg";
import MEALS from "./assets/howdoes/circle.svg";

const HowDoes = () => {
  const items = [
    {
      title: "Select location",
      img: MAP,
      description: "Choose the location where your food will be delivered.",
    },
    {
      title: "Choose order",
      img: ORDER,
      description: "Check over hundreds of menus to pick your favorite food",
    },
    {
      title: "Pay advanced",
      img: PAY,
      description:
        "It's quick, safe, and simple. Select several methods of payment",
    },
    {
      title: "Enjoy meals",
      img: MEALS,
      description: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <div className="w-container mx-auto p-10 bg-gradient-to-b from-[#fff0cf] to-[#FDEDCA00]">
      <h1 className="text-center text-[#F17228] font-SourceSans font-bold text-[40px]">
        How does it work
      </h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
        {items.map((item, index) => (
          <div key={index} className="text-center max-w-[300px]">
            <img src={item.img} alt={item.title} className="mx-auto mb-4" />
            <p className="font-SourceSans font-semibold text-lg">
              {item.title}
            </p>
            <p className="font-open-sans text-[#9E9E9E]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoes;
