import React from "react";
import { Box } from "@chakra-ui/react";
import RacismMainBody from "./racismMainBody/RacismMainBody";
import RacismSideBar from "./racismSideBar/RacismSideBar";


const RacismPage = () => {
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
          <RacismMainBody />
          
        </Box>
        <Box  display={{
          base:"none",
          md:"block",
          lg:"block",
      
         
        }} width={{
          sm:"0px",
          md:"28%"
        }}>
          <RacismSideBar />
        </Box>
      </Box>
  )
}

export default RacismPage