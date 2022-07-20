import React from 'react'
import LeftPart from '../Components/LeftPart'
import MiddlePart from '../Components/MiddlePart'
import RightPart from '../Components/RightPart'
import { Box } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box display='flex' w='91%' justifyContent='space-between' m='auto'>
        <LeftPart />
        <MiddlePart />
        <RightPart />
    </Box>
  )
}

export default Homepage