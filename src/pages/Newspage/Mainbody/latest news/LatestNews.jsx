import React from "react";
import { Box } from "@chakra-ui/react";
import MainBody from "./MainBody/MainBody";
import SideBar from "./sidebar/SideBar";

const LatestNews = () => {
  return (
    <Box maxWidth={{
      sm:"90%",
      md:"95%",
      lg:"82%"
    }} display="flex" gap="20px" m="auto" marginTop="2rem">
      <Box width={{
        sm:"100%",
        md:"100%",
        lg:"70%"
      }}>
        <MainBody />
      </Box>
      <Box  display={{
        base:"none",
        md:"block",
        lg:"block",
    
       
      }} width={{
        sm:"0px",
        md:"28%"
      }}>
        <SideBar />
      </Box>
    </Box>
  );
};

export default LatestNews;
