import React, { useEffect, useState } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleRacismBody from "./SingleRacismBody";

const RacismMainBody = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://databasefornewsapp.herokuapp.com/racism`)
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
          Racism
        </Text>
        <Text fontSize="18px">
          Despite cricket's multicultural history, the game has long been
          blighted by racism. Racial segregation denied late 19th century fast
          bowler Krom Hendricks a chance to play for South Africa. In the 1960s,
          the Basil D'Oliveira affair precipitated South Africa's 22-year
          sporting isolation for its apartheid policies. Tony Greig's infamous
          statement in 1976 about making West Indies "grovel" is well known, as
          is Dean Jones casual, off-mic "terrorist" remark aimed at Hashim Amla,
          and the Monkeygate scandal of 2008. More recently, the Black Lives
          Movement has forced a reckoning within the game, with boards
          committing to change as cricketers have spoken up about their
          continuing experiences with racism and marginalisation.
        </Text>
      </Box>
      {/* Main body */}

      {newsData.length > 0 &&
        newsData.map((item, index) => {
          return <SingleRacismBody key={index} item={item} index={index} />;
        })}
    </Box>
  );
};

export default RacismMainBody;
