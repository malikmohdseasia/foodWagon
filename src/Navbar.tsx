import LOGO from "./assets/navbar/logo.svg";
import MAP from "./assets/navbar/map.svg";
import SEARCH from "./assets/navbar/Search.svg";
import USER from "./assets/navbar/user.svg";

const Nav = () => {
  return (
    <div className="w-container mx-auto px-4">
      <nav className="flex justify-between items-center py-5 ">
        <div className="flex gap-3 items-center">
          <img src={LOGO} alt="logo" className="w-50 cursor-pointer" />

          <p className="hidden lg:block font-SourceSans font-bold text-deliver ">
            Deliver to:
          </p>

          <img src={MAP} alt="map" className="hidden lg:block" />

          <p className="hidden lg:block text-deliver font-open-sans ">
            Current Location{" "}
            <span className="font-bold">Mohammadpur Bus Stand, Dhaka</span>
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1 cursor-pointer ">
            <img src={SEARCH} alt="search" className="mt-1" />

            <p className="hidden md:block lg:block font-bold font-SourceSans text-deliver ">
              Search Food
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 bg-white shadow-2xl px-4 h-[46px] rounded-[10px]">
            <img src={USER} alt="user" className="object-contain w-4" />

            <p
              className="hidden sm:block bg-linear-to-r from-[#FFB800] to-[#FF8A00] bg-clip-text text-transparent font-bold font-SourceSans 
            cursor-pointer
            "
            >
              Login
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
