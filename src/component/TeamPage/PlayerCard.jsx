import { Avatar, Box, Text } from '@chakra-ui/react';

import React from 'react'

const PlayerCard = ({ name, type, image, score, innings, average }) => {
  return (
    <Box display='flex' p='1rem' alignItems='center' borderBottom='1px' borderColor="gray.200" >
        <Avatar size='lg' mr='1rem' name='Usman Khawaja' src={image} />
        <Box>
          <Box display='flex'>
            <Text fontSize='14px' fontWeight='500' mr='0.75rem'>{name}</Text>
            <Text fontSize='14px' fontWeight='500' color='#6C6D6F'>{type}</Text>
          </Box>
          <Box>
            <Text fontSize='24px' fontWeight='700'>{score}</Text>
          </Box>
          <Box display='flex'>
            <Text fontSize='12px' fontWeight='500' color='#6C6D6F' mr='0.75rem'>Innings: {innings}</Text>
            <Text fontSize='12px' fontWeight='500' color='#6C6D6F'>Average: {average}</Text>
          </Box>
        </Box>
    </Box>
  )
}

export default PlayerCard
