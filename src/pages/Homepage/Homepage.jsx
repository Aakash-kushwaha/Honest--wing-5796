import React from 'react'
import LeftPart from '../../component/HomePage/LeftPart'
import MiddlePart from '../../component/HomePage/MiddlePart'
import RightPart from '../../component/HomePage/RightPart'
import { Box } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Box display='flex' w='91%' justifyContent='space-between' m='auto'>
        <LeftPart w='21%' />
        <MiddlePart w='51%' />
        <RightPart w='24%' />
    </Box>
  )
}

export default Homepage