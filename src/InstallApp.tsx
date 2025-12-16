import OFF from "./assets/installapp/off.svg";
import MAP from "./assets/installapp/map.svg";
import CLOCK from "./assets/installapp/clock.svg";
import MOBILE from "./assets/installapp/mobile.png";
import GOOGLE from "./assets/installapp/google.svg";
import APPLE from "./assets/installapp/apple.svg";
import BG from "./assets/installapp/Background.png";

const InstallApp = () => {
  const items = [
    { label: "Daily Discounts", img: OFF },
    { label: "Live Tracing", img: MAP },
    { label: "Quick Delivery", img: CLOCK },
  ];

  return (
    <div
      className="w-container mx-auto bg-[#FFAE00] bg-linear-to-r from-[#FFAE00] to-[#FF8A00] relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Items Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-10 md:mx-2 ">
        <div className="bg-[#FFFFFF] p-8 shadow-2xl rounded-3xl">
          <div className="flex flex-col gap-10 items-center justify-center md:flex-row md:gap-10 flex-wrap">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex justify-center items-center gap-3 ${
                  index !== 0
                    ? " border-0 p-0 sm:border-none md:border-l-2 border-[#CFCFCF] pl-4"
                    : ""
                }`}
              >
                <img src={item.img} alt="feature" className="w-20 h-20" />
                <p className="font-SourceSans font-bold text-[28px] text-transparent bg-clip-text bg-linear-to-r from-[#FB3C00] to-[#FFB800] flex flex-col leading-tight">
                  {item.label.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="flex justify-center mt-20 lg:absolute  lg:w-[500px] lg:top-40 md:top-30 md:left-0 ">
        <img src={MOBILE} alt="mobile" className=" " />
      </div>

      {/* Install Section */}
      <div className=" flex  justify-center text-center lg:text-start lg:justify-center items-center mt-15 ">
        <div className="lg:ml-120 lg:top-60">
          <p className="font-bold font-SourceSans text-[40px] text-transparent bg-clip-text bg-linear-to-r from-[#FB3C00] to-[#FFB800]">
            Install the app
          </p>
          <p className="font-open-sans text-[#827E7E] max-w-[400px] mt-4">
            It's never been easier to order food. Look for the finest discounts
            and you'll be lost in a world of delectable food.
          </p>

          {/* Google & Apple Buttons */}
          <div className="flex flex-wrap justify-center gap-2 my-8">
            <div className="rounded-[5px] shadow-2xl p-1 w-[180px] bg-[#FFFFFF] flex gap-1">
              <img src={GOOGLE} alt="google play" className="object-contain" />
              <div>
                <p className="text-[#616161] text-[14px]">GET IT ON</p>
                <p className="text-[#212121] font-semibold text-[22px] cursor-pointer">
                  Google Play
                </p>
              </div>
            </div>

            <div className="rounded-[5px] shadow-2xl p-1 w-[180px] bg-[#FFFFFF] flex gap-1">
              <img src={APPLE} alt="app store" className="object-contain" />
              <div>
                <p className="text-[#616161] text-[14px]">Download on the</p>
                <p className="text-[#212121] font-semibold text-[22px] cursor-pointer">
                  App Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallApp;
