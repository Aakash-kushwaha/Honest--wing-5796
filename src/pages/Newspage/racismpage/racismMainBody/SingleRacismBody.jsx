import React from "react";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const SingleRacismBody = ({item}) => {
  return (
    <Stack
      borderBottom={"1px solid #f4f5f7"}
      w={{ sm: "100%", md: "100%" }}
      height={{ sm: "476px", md: "15rem" }}
      direction={{ base: "column", md: "row" }}
      gap={"12px"}
      padding="1rem"
      borderRadius="15px"
    >
      <Flex flex={1} overflow="hidden" zIndex="1" borderRadius="15px">
        <Image
          _hover={{
            transform: "scale(1.15)",
            borderRadius: "15px",
          }}
          transition="0.5s all ease-in-out"
          objectFit="cover"
          zIndex="1 1"
          width={"100%"}
          height={"80%"}
          src={item.urlToImage}
          alt="Cricket latest news"
          borderRadius="15px"
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
          <Text textAlign={"left"} fontSize={"13px"} color="grey">
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
  )
}

export default SingleRacismBody