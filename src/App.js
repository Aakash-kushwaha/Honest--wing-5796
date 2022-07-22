import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Box } from "@chakra-ui/react";
import SimpleSlider from "./pages/Homepage/Header&Footer/Header/Slider";
import Mainroutes from "./Mainroutes/Mainroutes";
// import "./App.css";
import Mainroutes from "./Mainroutes/Mainroutes";
import Footer from "./pages/Homepage/Header&Footer/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Mainroutes></Mainroutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
