import React from "react";
import { Box } from "@chakra-ui/react";
import MainBody from "./MainBody/MainBody";
import SideBar from "./sidebar/SideBar";

const LatestNews = () => {
  return (
    <Box maxWidth="82%" display="flex" gap="20px" m="auto" marginTop="2rem">
      <Box width="70%">
        <MainBody />
      </Box>
      <Box  display={{
        sm:"none",
        md:"block",
    
       
      }} width="28%">
        <SideBar />
      </Box>
    </Box>
  );
};

export default LatestNews;
