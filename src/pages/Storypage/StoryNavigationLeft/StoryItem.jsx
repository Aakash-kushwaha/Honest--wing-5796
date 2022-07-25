import React, { Fragment } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CircleIcon from "../../../component/CircleIcon/CircleIcon";
import { Link as RouterLink } from "react-router-dom";

const StoryItem = (props) => {
  const news = props.data;

  return (
    <Fragment>
      <RouterLink to={`/storypage/${news.id}`}>
        <Heading as="h6" size="xs">
          {news.title}
        </Heading>
        <Box display={"flex"} fontSize="0.7rem">
          <Text color={"rgba(72,73,74)"}>
            {news.id % 2 === 0 ? "4hr" : "1d"}
          </Text>
          <CircleIcon
            boxSize={2}
            height={"auto"}
            color={"rgba(203,204,206)"}
            m={"0 5px"}
          />
          <Text color={"rgba(72,73,74)"}>{news.author}</Text>
        </Box>
      </RouterLink>
    </Fragment>
  );
};

export default StoryItem;
