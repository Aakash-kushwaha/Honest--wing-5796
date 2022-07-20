import React, { useEffect, useState } from "react";

import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import SingleData from "./SingleData";
const key = "cf8a2c481ce94d8596a511a5c6922f39";
const MainBody = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=cricket&from=2022-06-20&sortBy=publishedAt&apiKey=${key}`
      )
      .then((res) => {
        setNewsData(res.data.articles);
        setLoading(false);
      })
      .then((err) => {
        setLoading(false);
        setError(true);
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
