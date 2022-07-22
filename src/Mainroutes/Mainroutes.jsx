import React from "react";
import { Route, Routes } from "react-router-dom";
import CardNav from "../pages/Homepage/Header&Footer/Header/cardnav/CardNav";
import MainNavbar from "../pages/Homepage/Header&Footer/Header/Mainnavbar/MainNavbar";
import SimpleSlider from "../pages/Homepage/Header&Footer/Header/Slider";
import Homepage from "../pages/Homepage/Homepage";
import MainNews from "../pages/Newspage/MainNews";
import Storypage from "../pages/Storypage/Storypage";
import Scoredescription from "../pages/Scoredescription/Scoredescription";

const Mainroutes = () => {
  return (<>
  {/* <CardNav></CardNav>
    <MainNavbar></MainNavbar> */}
    <Routes>
    <Route path={"/cardnav"} element={<CardNav></CardNav>}></Route>
    <Route path={"/mainnvabar"} element ={<MainNavbar></MainNavbar>}></Route>
    <Route path="/" element={<Homepage></Homepage>}></Route>
   
    <Route path={"/newspage"} element={<MainNews></MainNews>}></Route>
    
      <Route path="/storypage" element={<Storypage />} />
    </Routes>
    </> );
};

export default Mainroutes;
