import React from "react";
import { Box } from "@chakra-ui/react";
import StoryNavigationLeft from "./StoryNavigationLeft/StoryNavigationLeft";
import StoryContent from "./StoryContent";

const Storypage = () => {
  return (
    <Box display="flex" justifyContent="space-between" p="2rem">
      <Box
        w="300px"
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        mt="2rem"
      >
        <StoryNavigationLeft />
      </Box>
      <Box w="calc(100% - 300px)">
        <StoryContent />
      </Box>
    </Box>
  );
};

export default Storypage;
