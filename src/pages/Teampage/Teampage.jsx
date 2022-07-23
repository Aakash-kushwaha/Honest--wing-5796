import React from 'react';
import { Box } from '@chakra-ui/react';
import LeftPart from '../../component/TeamPage/LeftPart';
import MiddlePart from '../../component/TeamPage/MiddlePart';
import RightTPart from '../../component/TeamPage/RightTPart';

const Teampage = () => {
  return (
    <Box display='flex' justifyContent='space-between' w='91%' m='auto' mt='2rem'>
        <LeftPart />
        <MiddlePart />
        <RightTPart />
    </Box>
  )
}

export default Teampage