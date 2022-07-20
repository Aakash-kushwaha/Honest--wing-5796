import React from "react";
import { Box } from "@chakra-ui/react";
import NewsNav from "./Mainbody/NewsNavbar/NewsNav";
import LatestNews from "./Mainbody/latest news/LatestNews";

const MainNews = () => {
  return (
    <Box
      bg="
    #f9f9fb"
    >
      <NewsNav />
      <Box mt="0px">
        <LatestNews />
      </Box>
    </Box>
  );
};

export default MainNews;
