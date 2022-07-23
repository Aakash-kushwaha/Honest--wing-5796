import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import MatchCard from './MatchCard';
import { ausMatches } from './MatchesData'; 

const LeftPart = () => {
  return (
    <Box borderRadius='lg' w='21%'>
        <Box w='80%' m='auto' mt='0.5rem'>
            <Text textAlign='center' fontSize='18px' fontWeight='700'>Upcoming Matches</Text>
        </Box>
        <Box>
          {ausMatches.map(m => (
            <MatchCard key={m.id} {...m} />
          ))}
          
        </Box>
    </Box>
  )
}

export default LeftPart