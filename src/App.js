import "./App.css";
import Mainroutes from "./Mainroutes/Mainroutes";
import Footer from "./pages/Homepage/Header&Footer/Footer/Footer";
import MainNavbar from "./pages/Homepage/Header&Footer/Header/Mainnavbar/MainNavbar";

function App() {
  return (
    <div className="App">
 
    <MainNavbar></MainNavbar>
      <Mainroutes></Mainroutes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
