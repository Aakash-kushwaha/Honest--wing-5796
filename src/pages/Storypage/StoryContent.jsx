import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

const StoryContent = () => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      w="100%"
      p="2.5rem"
      borderRadius="0.75rem"
      textAlign="left"
    >
      <Heading as="h2" size="xl" mb="0.5rem">
        Story Title
      </Heading>
      <Text fontSize="xl">Story sub-title</Text>
      <Image
        borderRadius="0.75rem"
        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/341700/341768.4.jpg"
      />
    </Box>
  );
};

export default StoryContent;
