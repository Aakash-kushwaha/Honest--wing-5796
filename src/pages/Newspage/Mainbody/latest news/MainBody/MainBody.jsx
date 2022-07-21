import React, { useEffect, useState } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleData from "./SingleData";
const key = "";
// 36227b5154024589a8b8f78b203f1dec
const MainBody = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://databasefornewsapp.herokuapp.com/criket`
      )
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
          Latest News
        </Text>
      </Box>
      {/* Main body */}

      {newsData.length > 0 &&
        newsData.map((item, index) => {
          return <SingleData key={index} item={item} index={index} />;
        })}
    </Box>
  );
};

export default MainBody;
