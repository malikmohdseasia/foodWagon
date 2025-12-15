import AreYouReady from "./AreYouReady";
import BestDeal from "./BestDeal";
import FeaturedRestaurants from "./FeaturedRestaurants";
import Foods from "./Foods";
import Footer from "./Footer";
import Hero from "./Hero";
import HowDoes from "./HowDoes";
import InstallApp from "./InstallApp";
import Navbar from "./Navbar";
import PopularItems from "./PopularItems";
import SearchFood from "./SearchFood";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Foods/>
    <HowDoes/>
    <PopularItems/>
    <FeaturedRestaurants/>
    <SearchFood/>
    <InstallApp/>
    <BestDeal/>
    <AreYouReady/>
    <Footer/>
    </>
  )
}

export default App