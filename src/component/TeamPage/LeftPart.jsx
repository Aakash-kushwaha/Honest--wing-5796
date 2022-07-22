import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const LeftPart = () => {
  return (
    <Box border='1px solid red' borderRadius='lg' w='21%'>
        <Box w='80%' m='auto'>
            <Button colorScheme='blue' w='50%' />
            <Button colorScheme='blue' w='50%' />
        </Box>
    </Box>
  )
}

export default LeftPart