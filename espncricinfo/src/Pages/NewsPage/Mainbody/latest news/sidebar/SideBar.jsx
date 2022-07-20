import React, { useEffect, useState }  from "react";
import { Box, Text } from "@chakra-ui/react";
import SingleSideData from "./SingleSideData";
import axios from 'axios';
const key = "cf8a2c481ce94d8596a511a5c6922f39";
const SideBar = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get(
          `https://newsapi.org/v2/everything?q=sports&from=2022-06-20&sortBy=publishedAt&apiKey=${key}`
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
        <Text fontSize="18px" fontWeight="bold">
          Most Read
        </Text>
      </Box>

      {
        newsData.length > 0 &&
            newsData.map((item, index) => {
              return (
                    <SingleSideData item={item}  key={index} />
              )
            })}
      

    </Box>
  );
};

export default SideBar;
