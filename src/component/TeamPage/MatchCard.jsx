import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const MatchCard = ({ date, venue, hT, aT, hTN, aTN, status}) => {
  return (
    <Box p='1rem 0' m='0 1rem' borderBottom='1px' borderColor="gray.200">
        <Box mb='0.5rem'>
            <Text fontSize="12px" fontWeight="700" color='#48494a'>{date}</Text>
            <Text fontSize="12px" color='#6c6d6f'>{venue}</Text>
        </Box>
        <Box mb='0.5rem'>
            <Box display='flex' alignItems='center' mb='0.25rem'>
                <Image w='1.5rem' src={hT} alt='l1' />
                <Text ml='0.75rem' fontSize='14px' fontWeight='700' color='#2B2C2D'>{hTN}</Text>
            </Box>
            <Box display='flex' alignItems='center'>
                <Image w='1.5rem' src={aT} alt='l2' />
                <Text ml='0.75rem' fontSize='14px' fontWeight='700' color='#2B2C2D'>{aTN}</Text>
            </Box>
        </Box>
        <Box>
            <Text fontSize='14px' color='#2B2C2D'>{status}</Text>
        </Box>
    </Box>
  )
}

export default MatchCard