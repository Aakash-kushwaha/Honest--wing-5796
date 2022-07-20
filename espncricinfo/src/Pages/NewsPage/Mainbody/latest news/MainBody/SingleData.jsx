import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
const SingleData = ({ item, index }) => {
  return (
    <Stack
     borderBottom={"1px solid #f4f5f7"}
      w={{ sm: "100%", md: "100%" }}
      height={{ sm: "476px", md: "15rem" }}
      direction={{ base: "column", md: "row" }}
      gap={"12px"}
      padding="1rem"
    >
      <Flex flex={1}>
        <Image
          objectFit="cover"
          width={"100%"}
          height={"80%"}
          borderRadius="15px"
          src={item.urlToImage}
          alt="Cricket latest news"
        />
      </Flex>
      <Stack flex={2} flexDirection="column" alignItems="left" p={1} pt={2}>
        <Heading fontSize={"19px"} fontFamily={"body"}>
          {item.title}
        </Heading>

        <Text fontSize={"15px"} textAlign={"left"}>
          {item.content}
        </Text>
        <Stack align={"left"} direction={"row"} mt={6}>
          <Text textAlign={"left"} fontSize={"13px"}>
            {item.publishedAt}
          </Text>
        </Stack>

        <Stack
          width={"100%"}
          mt={"2rem"}
          direction={"row"}
          padding={2}
          justifyContent={"space-between"}
        ></Stack>
      </Stack>
    </Stack>
  );
};

export default SingleData;
