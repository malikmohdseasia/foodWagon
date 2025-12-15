import BG from "./assets/areyouready/bg.jpg";
import RIGHT from "./assets/areyouready/RIGHT.svg";

const AreYouReady = () => {
  return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center h-[300px]"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="text-center text-white  font-bold font-SourceSans">
        <h1 className="text-[20px] md:text-[40px]">
          Are you ready to order with <br /> the best deals?
        </h1>

        <div className="bg-[#F15E28] w-[200px] m-auto h-10 text-white font-bold  rounded-[12px] mt-10 flex  items-center justify-center gap-1 cursor-pointer">
          PROCEED TO ORDER <img src={RIGHT} alt="order" className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default AreYouReady;
