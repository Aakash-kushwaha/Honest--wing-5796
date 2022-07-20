import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react'

const LeftPart = () => {
  return (
    <Box border='1px solid red' borderRadius='lg' w='21%'>
        <Box>
          <Image src='https://wassets.hscicdn.com/static/images/nlp-logo.svg' alt='l1' />
          <Text>Which spinner has taken the most wickets in an IPL season?</Text>
          <Button colorScheme='teal' variant='outline'>Ask a question</Button>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    </Box>
  )
}

export default LeftPart