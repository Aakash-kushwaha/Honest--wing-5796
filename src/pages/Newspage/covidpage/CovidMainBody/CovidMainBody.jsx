import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleCovMainpage from "./SingleCovMainpage";

const CovidMainBody = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://databasefornewsapp.herokuapp.com/sports`)
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
          Covid-19
        </Text>
        <Text fontSize="18px">
          The Covid-19 pandemic hit sport in March 2020, forcing games to be
          played behind closed doors, and then getting cricket called off
          altogether. The PSL was suspended before the semi-finals, and all
          cricket ground to a halt. The men's T20 World Cup was postponed to
          2021, the IPL to later in the year, and the launch of the Hundred
          deferred to 2021. International cricket only returned in July, when
          West Indies played in England in a biosecure bubble. In 2021, the PSL
          was hit by Covid again and its second half postponed.
        </Text>
      </Box>
      {/* Main body */}

      {newsData.length > 0 &&
        newsData.map((item, index) => {
          return <SingleCovMainpage key={index} item={item} index={index} />;
        })}
    </Box>
  );
};

export default CovidMainBody;
