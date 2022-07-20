import React from 'react';
import { Box } from '@chakra-ui/react';
import NewsCard from './NewsCard';

const MiddlePart = () => {
  return (
    <Box border='1px solid green' borderRadius='lg' w='51%' >
      <NewsCard />
    </Box>
  )
}

export default MiddlePart