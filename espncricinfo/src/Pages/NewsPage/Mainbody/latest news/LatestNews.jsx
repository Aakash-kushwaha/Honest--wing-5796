import React from "react";
import { Box } from "@chakra-ui/react";

import SideBar from "./SideBar";
import MainBody from "./MainBody/MainBody";

const LatestNews = () => {
  return (
    <Box maxWidth="82%" display="flex" gap="20px" m="auto" marginTop="2rem">
      <Box width="70%">
        <MainBody />
      </Box>
      <Box border="1px solid black" width="28%">
        <SideBar />
      </Box>
    </Box>
  );
};

export default LatestNews;
