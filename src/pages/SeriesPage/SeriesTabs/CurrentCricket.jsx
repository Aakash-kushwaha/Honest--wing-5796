import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const CurrentCricket = () => {
  const internationalTours = [];
  return (
    <Box display={"flex"} mt={"1rem"}>
      <Box w={"100%"}>
        <Box>
          <Heading as="h5" size="sm" textTransform={"uppercase"}>
            International Tours
          </Heading>
        </Box>
      </Box>
      <Box w={"100%"} borderLeft={"1px solid #c7c7c7"} pl={"30px"}>
        <Box>
          <Heading as="h5" size="sm" textTransform={"uppercase"}>
            T20/T10 Tournaments
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentCricket;
