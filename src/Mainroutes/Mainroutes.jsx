import React from "react";
import { Route, Routes } from "react-router-dom";
import CardNav from "../pages/Homepage/Header&Footer/Header/cardnav/CardNav";
import MainNavbar from "../pages/Homepage/Header&Footer/Header/Mainnavbar/MainNavbar";
import SimpleSlider from "../pages/Homepage/Header&Footer/Header/Slider";
import Homepage from "../pages/Homepage/Homepage";
import MainNews from "../pages/Newspage/MainNews";
import Storypage from "../pages/Storypage/Storypage";
import Teampage from "../pages/Teampage/Teampage";
const Mainroutes = () => {
  return (<>
  {/* <CardNav></CardNav>
    <MainNavbar></MainNavbar> */}
    <Routes>
    <Route path={"/cardnav"} element={<CardNav></CardNav>}></Route>
    <Route path={"/mainnvabar"} element ={<MainNavbar></MainNavbar>}></Route>
    <Route path="/" element={<Homepage></Homepage>}></Route>
   
    <Route path={"/newspage"} element={<MainNews></MainNews>}></Route>
    
      <Route path="/storypage/:id" element={<Storypage />} />
      <Route path='/teampage' element={<Teampage />} />
    </Routes>
    </> );
};

export default Mainroutes;
