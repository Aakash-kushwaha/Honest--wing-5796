import React from "react";
import { Route, Routes } from "react-router-dom";
import CardNav from "../component/Header/Header/cardnav/CardNav";

import Homepage from "../pages/Homepage/Homepage";
import BallTemparing from "../pages/Newspage/ballTapering/BallTemparing";
import CovidPage from "../pages/Newspage/covidpage/CovidPage";
import Livescore from "../pages/Livescorepage/Livescore";
import MainNews from "../pages/Newspage/MainNews";
import RacismPage from "../pages/Newspage/racismpage/RacismPage";
import SeriesPage from "../pages/SeriesPage/SeriesPage";
import Storypage from "../pages/Storypage/Storypage";
import Teampage from "../pages/Teampage/Teampage";
import Scoredescription from "../pages/Scoredescription/Scoredescription";
const Mainroutes = () => {
  return (
   
    <Routes>
      <Route path={"/livescore"} element={<Livescore></Livescore>}></Route>
     <Route path={"/scoredescription"} element={<Scoredescription></Scoredescription>}></Route>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      {/* Newspage starts */}
      <Route path={"/newspage"} element={<MainNews></MainNews>}></Route>
      <Route path="/newspage/Covid-19" element={<CovidPage />} />
      <Route path="/newspage/Racism" element={<RacismPage />} />
      <Route path="/newspage/Ball-tempering" element={<BallTemparing />} />
      {/* Newspage ends */}
   
      <Route path="/storypage/:id" element={<Storypage />} />
      <Route path="/teampage" element={<Teampage />} />
    </Routes>
  );
};

export default Mainroutes;
