import logo from "./logo.svg";
import "./App.css";
import Com from "./Component/Com";
// import BasicExample from "./Component/Com";
import { FaCartShopping } from "react-icons/fa6";  //for icon
import Header from "./Header";
import Packages from "./Packages";
import Key_feature from "./Key_feature";
import About_us from "./About_us"
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Footer from "./Footer";
// import Y_Slider from "./Y_Slider";

function App() {
  return (
    
    <div className="App">
      {/* <Com></Com> */}
      <Header />
      <Packages />
      <Key_feature />
      <About_us />
      <Gallery />
      <Reviews />
      <Footer />
      {/* <Y_Slider /> */}
    </div>
  );
}

export default App;
