import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react';
import { ChevronRightIcon } from'@chakra-ui/icons';

const NewsCard = () => {
  return (
    <Box>
        <Box>   
            <Heading>CSA T20 LEAGUE</Heading>
            <Text>FRANCHISE CRICKET</Text>
        </Box>
        <Box>
            <Image src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/306400/306453.6.jpg' alt='l1' />
        </Box>
        <Box>
            <Heading>CSA T20 league likely to have four overseas players, no transformation targets</Heading>
            <Text>The league commissioner Graeme Smith said a number of international players were already on board</Text>
        </Box>
        <Box>
            <Box><Image src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/276600/276644.6.jpg' alt='l2' /></Box>
            <Box>
                <Heading>IPL owners buy all six teams in SA's new T20 league</Heading>
                <Text>CSK made the highest bid for the Johannesburg franchise, while Mumbai bought the Cape Town team</Text>
            </Box>
        </Box>
        <Box>
            <ChevronRightIcon color='blue' />
            <Link _hover={{color: "blue"}} >Graeme Smith in charge of SA's T20 league</Link>
        </Box>
    </Box>
  )
}

export default NewsCard