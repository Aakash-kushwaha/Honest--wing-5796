import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import StoryItem from "./StoryItem";
import { NewsContext } from "../../../context/NewsContext";

const StoryNavigationLeft = () => {
  // const { news } = useContext(NewsContext);
  // console.log(news);

  return (
    <Box mt="2rem">
      {/* {stories.map((story) => {
          return (
            <Box p="1rem" key={story.title}>
              <StoryItem data={story} />
            </Box>
          );
        })} */}
    </Box>
  );
};

export default StoryNavigationLeft;
