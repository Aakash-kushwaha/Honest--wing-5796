import React, { useEffect, useState }  from "react";
import { Box, Text } from "@chakra-ui/react";
import SingleSideData from "./SingleSideData";
import axios from 'axios';
const key = "36227b5154024589a8b8f78b203f1dec";
// 36227b5154024589a8b8f78b203f1dec
const SideBar = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get(
          `https://databasefornewsapp.herokuapp.com/sports`
        )
        .then((res) => {
          setNewsData(res.data);
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
