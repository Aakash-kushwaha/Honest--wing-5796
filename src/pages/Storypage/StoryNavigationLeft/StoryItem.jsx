import React, { Fragment } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CircleIcon from "../../../component/CircleIcon/CircleIcon";

const StoryItem = () => {
  return (
    <Fragment>
      <Heading as="h6" size="xs">
        West Indies ODIs a chance for India's bench to prove its strength
      </Heading>
      <Box display={"flex"} fontSize="0.7rem">
        <Text color={"rgba(72,73,74)"}>2d</Text>
        <CircleIcon
          boxSize={2}
          height={"auto"}
          color={"rgba(203,204,206)"}
          m={"0 5px"}
        />
        <Text color={"rgba(72,73,74)"}>Author</Text>
      </Box>
    </Fragment>
  );
};

export default StoryItem;
