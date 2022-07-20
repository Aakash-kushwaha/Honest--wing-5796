import React from "react";
import { Route, Routes } from "react-router-dom";
import Storypage from "../pages/Storypage/Storypage";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/storypage" element={<Storypage />} />
    </Routes>
  );
};

export default Mainroutes;
