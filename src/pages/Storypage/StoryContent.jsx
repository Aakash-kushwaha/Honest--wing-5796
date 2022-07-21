import React, { useEffect, useState } from "react";
import { Box, Image, Heading, Text, Icon, HStack, Spinner } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from 'axios';

const StoryContent = () => {
  const {id} = useParams();
  const [singleNews, setSingleNews] = useState({});
  const [loading, setLoading] = useState(true);

  const getSingleNews = (id) => {
    axios.get(`http://localhost:8080/articles/${id}`)
    .then(r => {
      setSingleNews(r.data);
      setLoading(false);
    })
    .catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getSingleNews(id);
  },[id])

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  const FooterTitles = [
    "Terms of Use",
    "Privacy Policy",
    "Interest-Based Ads",
    "Addendum to the Global Privacy Policy",
    "Feedback",
  ];
  return (
    <>
      {loading ? <Box m='20rem 0 0 25rem'><Spinner color='blue.500' size='xl' /></Box> : (
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
            _hover={{ textDecoration:"underline"}}
            w='fit-content'
          >
            <RouterLink to='/'>NEWS</RouterLink>
          </Heading>
          <Heading as="h2" size="xl" mb="0.5rem">
            {singleNews.title}
          </Heading>
          <Text fontSize="xl" mb="0.5rem">
            {singleNews.description}
          </Text>

          <Image
            borderRadius="0.75rem"
            src={singleNews.urlToImage}
          />
          <Text p="0 15%" mt="2rem">
            {singleNews.content}
          </Text>
          <HStack fontSize="0.75rem" mt="1rem">
            {FooterTitles.map((item, index) => {
              if (index === FooterTitles.length - 1) {
                return <Text key={index}>{item}</Text>;
              } else {
                return (
                  <Box key={index} display='flex' alignItems='center'>
                    <Text mr='5px'>{item}</Text>
                    <CircleIcon boxSize={1} mt='2px' />
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
