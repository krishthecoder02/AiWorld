import FeatureSection from "./component/FeatureSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import PriceSection from "./component/PriceSection";
import Workflow from "./component/Workflow";


//actully i am working in a startup name GurLux

const App = () => {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <FeatureSection/>
     <Workflow/>
     <PriceSection/>
     <Footer/>
     
    </>
  );
};

export default App;
