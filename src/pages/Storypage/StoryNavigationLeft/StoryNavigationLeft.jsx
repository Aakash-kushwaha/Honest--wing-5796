import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import StoryItem from "./StoryItem";
import axios from "axios";

const StoryNavigationLeft = () => {
  const [news, setNews] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/articles")
      .then((r) => {
        setNews(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box mt="2rem">
      {news.map((news) => {
        return (
          <Box p="1rem" key={news.id}>
            <StoryItem data={news} />
          </Box>
        );
      })}
    </Box>
  );
};

export default StoryNavigationLeft;
