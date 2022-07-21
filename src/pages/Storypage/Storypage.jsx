import React from "react";
import { Box } from "@chakra-ui/react";
import StoryNavigationLeft from "./StoryNavigationLeft/StoryNavigationLeft";
import StoryContent from "./StoryContent";

const Storypage = () => {
  return (
    <Box display="flex" justifyContent="space-between" p="1rem">
      <Box w="300px">
        <StoryNavigationLeft />
      </Box>
      <Box w="calc(100% - 320px)">
        <StoryContent />
      </Box>
    </Box>
  );
};

export default Storypage;
