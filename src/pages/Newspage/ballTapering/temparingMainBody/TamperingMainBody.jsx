import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import SIngleTempBody from "./SIngleTempBody";

const TamperingMainBody = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://databasefornewsapp.herokuapp.com/balTamparing`)
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      border="1px solid #f4f5f7"
      bg={"white"}
      paddingBottom="25px"
      borderRadius="10px"
    >
      <Box padding="1rem" borderBottom="1px solid #f4f5f7" width="100%">
        <Text fontSize="28px" fontWeight="bold">
          Ball-tampering
        </Text>
        <Text fontSize="18px">
          Players are barred, by Law 42.3, from rubbing the ball on the ground,
          interfering with its seam or surface, or using any implement that can
          alter the condition of the ball to thereby gain unfair advantage.
          There have been plenty of ugly incidents centring on accusations of
          ball-tampering through cricket's history: the John Lever "Vaseline"
          affair in 1976-77; the times England and New Zealand accused Pakistan
          of it in the early 1990s; Michael Atherton's admission that he used
          dirt to treat the ball against South Africa in 1994; and perhaps most
          infamously, the Oval Test of 2006 when Pakistan forfeited the match
          because they were accused of having tampered with the ball.
        </Text>
      </Box>
      {/* Main body */}

      {newsData.length > 0 &&
        newsData.map((item, index) => {
          return <SIngleTempBody key={index} item={item} index={index} />;
        })}
    </Box>
  );
};

export default TamperingMainBody;
