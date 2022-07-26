import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import StoryItem from "./StoryItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const StoryNavigationLeft = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();

  const getData = () => {
    axios
      .get("https://databasefornewsapp.herokuapp.com/articles")
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
          <Box
            p="1rem"
            key={news.id}
            borderLeft={news.id === Number(id) ? "3px solid #03a9f4" : "none"}
          >
            <StoryItem key={news.id} data={news} />
          </Box>
        );
      })}
    </Box>
  );
};

export default StoryNavigationLeft;
