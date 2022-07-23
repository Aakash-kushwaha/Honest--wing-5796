import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import axios from 'axios';


const MiddlePart = () => {
  const [news, setNews] = useState([]);

  const handleNews = () => {
    axios.get('http://localhost:8080/ausTeamNews')
    .then(r => {
      setNews(r.data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  // useEffect(() => {
  //   handleNews();
  // },[])

  return (
    <Box w='51%' >
      <Box borderRadius='xl' mb='1rem'>
        <Box>
          <Image  src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/324100/324153.6.jpg' alt='l1' />
        </Box>
        <Box bg='black' p='1rem'>
          <Text color='white' fontSize='30px' fontWeight='700' >Sakariya and Choudhary signed up by KFC T20 Max clubs</Text>
          <Text color='white'>The two will also train at the National Cricket Centre in Brisbane and be part of Queensland Bulls' pre-season preparations</Text>
        </Box>
      </Box>
      {news.map(n => (
        <NewsCard key={n.id} {...n} />
      ))}
    </Box>
  )
}

export default MiddlePart