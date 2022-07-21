import React from "react";
import { Route, Routes } from "react-router-dom";
import SimpleSlider from "../pages/Homepage/Header&Footer/Header/Slider";
import Homepage from "../pages/Homepage/Homepage";
import MainNews from "../pages/Newspage/MainNews";
import Storypage from "../pages/Storypage/Storypage";
import Scoredescription from "../pages/Scoredescription/Scoredescription";
const Mainroutes = () => {
  return (
      
    <Routes>
    <Route path={"/slider"} element={<SimpleSlider></SimpleSlider>}></Route>
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path={"/newspage"} element={<MainNews></MainNews>}></Route>
    <Route path={"/Scoredescription"} element={<Scoredescription></Scoredescription>}></Route>
      <Route path="/storypage" element={<Storypage />} />
    </Routes>
  );
};

export default Mainroutes;
