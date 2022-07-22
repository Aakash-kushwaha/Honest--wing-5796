import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
   
      
      </svg>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4,lg:5 }} w="96%" shadow={"lg"} padding="1rem" spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Key Series</ListHeader>
              <Link href={'#'}>West Indies v India</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>TNPL 2022</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>England v South Africa</Link>
              <Link href={'#'}>Sri Lanka v Pakistan</Link>
              <Link href={'#'}>Ireland v New Zealand</Link>
              <Link href={'#'}>England v South Africa</Link>
              <Link href={'#'}>Sri Lanka v Pakistan</Link>
              <Link href={'#'}>Ireland v New Zealand</Link>
              <Link href={'#'}>England v South Africa</Link>
              <Link href={'#'}>Scottland v New Zealand</Link>
              <Link href={'#'}>Zimbabwe v Bangladesh</Link>
              <Link href={'#'}>Ireland Tri-Nation</Link>
              <Link href={'#'}>County Div1</Link>
              <Link href={'#'}>County Div2</Link>
              <Link href={'#'}>CWG 2022</Link>
              <Link href={'#'}>Women's Championship</Link>
              <Link href={'#'}>World Test Championship</Link>
              <Link href={'#'}>World Cup Super League</Link>
              

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Quick Links</ListHeader>
              <Link href={'#'}>T20 Time Out</Link>
              <Link href={'#'}>T20 Time Out Hindi</Link>
              <Link href={'#'}>ICC Rankings</Link>
              <Link href={'#'}>Fantasy Pick</Link>
              <Link href={'#'}>Haan Ya Naa</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>ESPNcrickinfo</ListHeader>
              <Link href={'#'}>Android App</Link>
              <Link href={'#'}>iOS App</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow ESPNcrickinfo</ListHeader>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Facebook</Link>
             <Link href={'#'}>YouTube</Link>
            </Stack> 
            <Stack align={'flex-start'}>
              <ListHeader> ESPN Sites</ListHeader>
              <Link href={'#'}>The Cricket Month</Link>
              <Link href={'#'}>ESPN</Link>
            </Stack> 
          </SimpleGrid>
        </Container>
      
      </Box>
    );
  }