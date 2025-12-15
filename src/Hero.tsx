import BG from "./assets/background/bg.png";
import BIKE from "./assets/background/bike.svg";
import CART from "./assets/background/cart.svg";
import SEARCH from "./assets/background/search.svg";
import FOOD from "./assets/background/food.png";
import MAP from "./assets/background/map.svg";

const Hero = () => {
  return (
    <div
      className="w-full   bg-cover bg-center bg-no-repeat flex justify-center  overflow-hidden  lg:relative lg:justify-between"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="mx-20 ">
        <div className="my-20 text-center md:text-start">
          <h1 className="text-white font-SourceSans text-[30px] sm:text-[40px] md:text-[50px] font-bold ">
            Are you starving?
          </h1>
          <p className="text-hero font-SourceSans my-5">
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className="bg-white rounded-2xl p-5">
            <div className=" flex gap-10">
              <div className="flex  justify-start gap-5 p-2 w-[140px] h-[38px] bg-[#F172281A] items-center rounded ">
                <img src={BIKE} alt="bike" className="w-10 h-10" />
                <p className="text-[#F17228] cursor-pointer font-bold">
                  Delivery
                </p>
              </div>
              <div className="flex gap-5  justify-start p-2 w-[140px] h-[38px] items-center rounded cursor-pointer">
                <img src={CART} alt="cart" className="w-8 h-8" />
                <p className="text-[#757575] font-SourceSans font-bold">
                  Pickup
                </p>
              </div>
            </div>
            <hr className="my-4 opacity-10    " />
            <div className=" flex justify-center items-center my-5">
              <div className="flex justify-between items-center  ">
                <div className="w-[90%]  md:w-[400px] lg:w-[250px] xl:w-[500px] flex items-center  rounded-lg overflow-hidden p-2 gap-2 bg-[#F5F5F5]">
                  <img src={MAP} alt="map" className="w-6 h-6 object-contain" />

                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="flex-1 outline-none border-none font-open-sans text-[#9E9E9E]"
                  />
                </div>
              </div>
              <div className="flex items-center bg-linear-to-r from-[#FF7A7A] to-[#F65900] w-[20%] sm:w-[25%] md:w-[30%] h-10 md:h-[55px] rounded-lg px-4 gap-2 cursor-pointer mx-2">
                <img
                  src={SEARCH}
                  alt="search"
                  className="w-4 h-4 object-contain"
                />

                <p className="hidden sm:flex text-white font-SourceSans font-bold text-center ">
                  Find Food
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden  flex items-center justify-center lg:absolute top-30 right-20 mt-10">
          <img
            className="object-contain -mb-10 w-[250px] md:w-[400px]"
            src={FOOD}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
