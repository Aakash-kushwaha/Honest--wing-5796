import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Avatar,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";
import CircleIcon from "../../component/CircleIcon/CircleIcon";

const StoryContent = () => {
  const { id } = useParams();
  const [singleNews, setSingleNews] = useState({});
  const [loading, setLoading] = useState(true);

  const getSingleNews = (id) => {
    axios
      .get(`https://databasefornewsapp.herokuapp.com/articles/${id}`)
      .then((r) => {
        setSingleNews(r.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSingleNews(id);
  }, [id]);
  console.log(singleNews);

  const FooterTitles = [
    "Terms of Use",
    "Privacy Policy",
    "Interest-Based Ads",
    "Addendum to the Global Privacy Policy",
    "Feedback",
  ];
  return (
    <>
      {loading ? (
        <Box m="20rem 0 0 25rem">
          <Spinner color="blue.500" size="xl" />
        </Box>
      ) : (
        <Box
          border="1px"
          borderColor="gray.200"
          w="100%"
          p="2.5rem"
          borderRadius="0.75rem"
          textAlign="left"
        >
          <Heading
            as="h4"
            size="sm"
            mb="1rem"
            textTransform="uppercase"
            color="#03a9f4"
            _hover={{ textDecoration: "underline" }}
            w="fit-content"
          >
            <RouterLink to="/">NEWS</RouterLink>
          </Heading>
          <Heading as="h2" size="xl" mb="0.5rem">
            {singleNews.title}
          </Heading>
          <Text
            fontSize="1.125rem"
            mb="0.5rem"
            color={"rgba(72,73,74)"}
            lineHeight="1.75rem"
          >
            {singleNews.description}
          </Text>
          {singleNews.author && (
            <HStack>
              <Avatar size="md" bg="#03a9f4" mb="1rem" />
              <Box pb="1rem">
                <Text fontSize="0.875rem" fontWeight="500">
                  {singleNews.author}
                </Text>
                <Divider borderColor="rgba(203,204,206)" />
                <Text fontSize="0.75rem" color="rgba(108,109,111)">
                  {singleNews.id % 2 === 0 ? "4hr" : "1d"}
                </Text>
              </Box>
            </HStack>
          )}
          <Image borderRadius="0.75rem" src={singleNews.urlToImage} />
          <Text p="0 15%" mt="2rem">
            {singleNews.content}
          </Text>
          <HStack fontSize="0.75rem" mt="1rem">
            {FooterTitles.map((item, index) => {
              if (index === FooterTitles.length - 1) {
                return <Text key={index}>{item}</Text>;
              } else {
                return (
                  <Box key={index} display="flex" alignItems="center">
                    <Text mr="5px">{item}</Text>
                    <CircleIcon boxSize={1} mt="2px" />
                  </Box>
                );
              }
            })}
          </HStack>
        </Box>
      )}
    </>
  );
};

export default StoryContent;
