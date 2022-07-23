import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

const MiddlePart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get('http://localhost:8080/articles')
    .then(r => {
      setLoading(false);
      setData(r.data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <Box w={{base: '90%', md: '90%', lg: '51%'}} >
      {loading && <Box m='18rem 0 0 18rem'><Spinner color='blue.500' size='xl' /></Box>}
      {data?.map(d => (
        <NewsCard key={d.id} {...d} />
      ))}
    </Box>
  )
}

export default MiddlePart