import React from "react";
import { Box } from "@chakra-ui/react";
import NewsNav from "./Mainbody/NewsNavbar/NewsNav";
import LatestNews from "./Mainbody/latest news/LatestNews";
import CovidPage from "./covidpage/CovidPage";

const MainNews = () => {
  return (
    <Box
      bg="
    #f9f9fb"
    >
      <NewsNav />
      <LatestNews />
      {/* <CovidPage/> */}
    </Box>
  );
};

export default MainNews;
