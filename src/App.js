import "./App.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import Homepage from "./pages/Homepage/Homepage";
import { Box } from "@chakra-ui/react";

import logo from "./logo.svg";
// import './App.css';
import SimpleSlider from "./pages/Homepage/Header&Footer/Header/Slider";
import Mainroutes from "./Mainroutes/Mainroutes";
import { NewsContext } from "./context/NewsContext";

function App() {
  const { setNews } = useContext(NewsContext);

  useEffect(() => {
    const key = "e7872f048197450d858f90869108d99a";
    // let getData = async () => {
    //   let r = await axios.get(
    //     `https://newsapi.org/v2/everything?q=Cricket&from=2022-07-21&sortBy=popularity&apiKey=${key}`
    //   );
    //   setNews(r.data);
    //   console.log("Appjs ", r.data);
    // };
    // getData();
  }, []);
  return (
    <div className="App">
      <Mainroutes></Mainroutes>
    </div>
  );
}

export default App;
