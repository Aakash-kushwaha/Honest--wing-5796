import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from'@chakra-ui/icons';

const RightPart = () => {
  return (
    <Box display={{base: "none", md: "none", lg: "block"}} w='24%'>
      <Box mb='1rem' border='1px solid grey' borderRadius='lg'>
        <Text p='0.5rem' pl='1rem' borderBottom='1px solid grey' fontSize='14px' fontWeight='500' >News Headlines</Text>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />Pujara hits yet another double-century</Button>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />Babar: Shafique can be 'one of the best'</Button>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />Stokes: Stop treating players like 'cars'</Button>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />Boult replaces Bumrah as top ODI bowler</Button>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />India to tour Zimbabwe in August</Button>
        <Button colorScheme='blue' variant='ghost' color='black' w='100%' justifyContent='left' fontSize='13px' ><ChevronRightIcon color='blue' mr='0.75rem' />Buzz: Team India says 'hey'</Button>
      </Box>
      <Box border='1px solid grey' borderRadius='lg'>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/181100/181157.4.jpg' alt='l1' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>On This Day: Happy birthday, Barry Richards</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342900/342964.png' alt='l2' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Quote Unquote: who's saying what?</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/338800/338807.6.jpg' alt='l3' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Photo feature: training for cricket</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342500/342563.6.jpg' alt='l4' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>The latest cricket photos</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/337000/337009.6.jpg' alt='l5' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>The art of the T20 finisher</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/335700/335706.6.jpg' alt='l6' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Who does it best in women's cricket?</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/337400/337475.6.jpg' alt='l7' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Photo feature: how cricket and politics mix</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/342400/342447.6.jpg' alt='l8' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Records index: most runs, most wickets, and a lot more</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/336400/336479.6.jpg' alt='l9' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>T Natarajan, the miracle man of Chinnappampatti</Text>
        </Box>
        <Box borderBottom='1px solid grey'>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/341900/341960.6.jpg' alt='l10' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>Rankings: Who's leading in every format</Text>
        </Box>
        <Box>
          <Image w='90%' m='1rem auto 0 auto' borderRadius='15px' src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/331700/331725.6.jpg' alt='l11' />
          <Text p=' 0.5rem 1rem' fontSize='13px' fontWeight='500'>The rise of A-team cricket</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default RightPart