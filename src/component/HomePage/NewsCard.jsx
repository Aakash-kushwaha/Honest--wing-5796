import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { ChevronRightIcon } from'@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NewsCard = ({ id, title, description, urlToImage, name, author, url}) => {

  return (
    <Box border='1px solid grey' borderRadius='lg' mb='1.5rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
        <Box p='0.5rem 1rem' borderBottom='1px solid grey'>   
            <Heading as='h5' size='sm'>{name}</Heading>
            <Text fontSize='11px'>{author}</Text>
        </Box>
        <Box p='1rem 1rem' borderBottom='1px solid grey'>
            <RouterLink to={`/storypage/${id}`}>
                <Box pb='0.5rem' cursor='pointer' zIndex='1' overflow='hidden' borderRadius='15px'>
                    <Image transition={'0.5s'} _hover={{transform: "scale(1.1)", borderRadius:'15px'}} objectFit='contain' zIndex='1' borderRadius='15px' src={urlToImage} alt='l1' />
                </Box>
                <Box cursor='pointer'>
                    <Heading pb='0.5rem' as='h3' size='md'>{title}</Heading>
                    <Text fontSize='14px'>{description}</Text>
                </Box>
            </RouterLink>
        </Box>
        <Box display={{base: "block", md: "block", lg: "flex"}} p='1rem 1rem' borderBottom='1px solid grey'>
            <RouterLink to={`/storypage/${id}`}><Box cursor='pointer' mr='1.5rem'><Image  borderRadius='15px' w='100%' src={urlToImage} alt='l2' /></Box></RouterLink>
            <RouterLink to={`/storypage/${id}`}>
                <Box cursor='pointer'>
                    <Heading mb='0.25rem' as='h6' size='md' fontSize='18px'>{title}</Heading>
                    <Text fontSize='14px'>{description}</Text>
                </Box>
            </RouterLink>
        </Box>
        <Box p='0.5rem 1rem'>
            <ChevronRightIcon color='blue' />
            <Link _hover={{color: "blue"}}><b>View Original Website</b></Link>
        </Box>
    </Box>
  )
}

export default NewsCard