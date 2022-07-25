import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const NewsCard = ({ title, description, urlToImage }) => {
  return (
    <Box display='flex' p='1rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' borderRadius='xl' mb='1rem'>
        <Box mr='1rem'>
            <Image borderRadius='xl' w='28rem'  src={urlToImage} alt={title} />
        </Box>
        <Box>
            <Text fontWeight='700' mb='0.25rem'>{title}</Text>
            <Text fontSize='14px'>{description}</Text>
        </Box>
    </Box>
  )
}

export default NewsCard