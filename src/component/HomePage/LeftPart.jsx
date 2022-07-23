import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { SearchIcon, ChevronRightIcon } from'@chakra-ui/icons';

const LeftPart = () => {
  return (
    <Box w='21%' borderRadius='lg'>
        <Box p='1rem' mb='1rem' border='1px solid grey' borderRadius='lg' cursor='pointer'>
          <Image m='auto' mb='1rem' w='9rem' src='https://wassets.hscicdn.com/static/images/nlp-logo.svg' alt='l1' />
          <Text m='auto' mb='1rem' fontSize='14px' fontWeight='500' textAlign='center'>Which spinner has taken the most wickets in an IPL season?</Text>
          <Button m='auto' w='100%' borderRadius='20px' colorScheme='blue' variant='outline'><SearchIcon mr='1rem' />Ask a question</Button>
        </Box>
        <Box mb='1rem' border='1px solid grey' borderRadius='lg'>
          <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >Key Series</Text>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />England v India</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />West Indies v India</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />TNPL 2022</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />England v South Africa</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Sri Lanka v Pakistan</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />West Indies v Bangladesh</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Ireland v New Zealand</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Scotland v New Zealand</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Zimbabwe v Bangladesh</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Ireland Tri-Nation (W)</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Vitality Blast</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />County Div1</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />County Div2</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />CWG Games (Cricket)</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Women's Championship</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Worlds Test Championship</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />World Cup Super League</Button>
        </Box>
        <Box mb='1rem' border='1px solid grey' borderRadius='lg'>
          <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >Quick Links</Text>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />T20 Time Out</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />T20 Time Out Hindi</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />ICC Rankings</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Fantasy Pick</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Haan Ya Naa</Button>
        </Box>
        <Box mb='1rem' border='1px solid grey' borderRadius='lg'>
          <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >ESPNcricinfo Apps</Text>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Android App</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />iOS App</Button>
        </Box>
        <Box mb='1rem' border='1px solid grey' borderRadius='lg'>
          <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >Follow ESPNcricinfo</Text>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Instagram</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Twitter</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />Facebook</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />YouTube</Button>
        </Box>
        <Box border='1px solid grey' borderRadius='lg'>
          <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >ESPN Sites</Text>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />The Cricket Monthly</Button>
          <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='12px' ><ChevronRightIcon color='blue' mr='0.75rem' />ESPN</Button>
        </Box>
    </Box>
  )
}

export default LeftPart