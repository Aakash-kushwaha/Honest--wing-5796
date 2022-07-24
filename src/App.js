import "./App.css";
import Footer from "./component/Header/Footer/Footer";
import CardNav from "./component/Header/Header/cardnav/CardNav";
import MainNavbar from "./component/Navbar/MainNavbar";
import Mainroutes from "./Mainroutes/Mainroutes";



function App() {
  return (
    <div className="App">
     <CardNav></CardNav>
    <MainNavbar></MainNavbar>
      <Mainroutes></Mainroutes>
 <Footer></Footer>
    </div>
  );
}

export default App;
