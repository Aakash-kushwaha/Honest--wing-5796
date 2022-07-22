import React from 'react'
import "./score.css"
import{
  Box, flexbox,
  
} from "@chakra-ui/react";
import {  Image, Text, } from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon } from'@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {  Heading,  Link, } from '@chakra-ui/react'


const Scoredescription = () => {
  return (<div >
 <div className="Main">
 


  <Box border='' borderRadius='lg' w='90%'   backgroundColor={""}  marginTop={"0px"}   >
 
  
    <Box border='' borderRadius='lg' w='71%' marginLeft={"150px"} backgroundColor={"lightgrey"} marginBottom={""} >
    
  
      <TableContainer>
      
  <Table variant='simple'>
  
    <Thead>
      <Tr>
        <Th fontSize={"1xl"} borderBottom="1px">Current Cricket</Th>
        <Th fontSize={"1xl"} borderBottom="1px"></Th>
        
        <Th fontSize={"1xl"} borderBottom="1px">Future Series/Tournament</Th>
        <Th fontSize={"1xl"} borderBottom="1px">Recently Concluded</Th>
      </Tr>
      </Thead>
    
  </Table>
</TableContainer>
    </Box>
    <Box border='' borderRadius='lg' w='80%' marginLeft={"150px"} marginTop={""}  backgroundColor="whitesmoke">
    <TableContainer>
  <Table variant='' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th fontSize={"1xl"} borderBottom="1px">INTERNATIONAL TOUR</Th>
        <Th fontSize={"3xl"}>|</Th>
        <Th fontSize={"1xl"} borderBottom="1px">T20/T10 TOURNAMENTS</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td color={"Highlight"}>England v South Africa</Td>
        <Td></Td>
        <Td color={"Highlight"}>Vitality Blast</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Sri Lanka v Pakistan</Td>
        <Td></Td>
        <Td color={"Highlight"}>TNPL 2022</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Ireland v New Zealand</Td>
        <Td></Td>
        <Td color={"Highlight"}>Afganistan Domestic Domestic</Td>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Ireland v New Zealand</Td>
        <Td></Td>
        <Td color={"Highlight"}>Shaffagazza League</Td>
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>West Indies v India</Td>
        <Td></Td>
       
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>IRE Tri-Series (Women)</Td>
        <Td></Td>
       
      
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
      <Th fontSize={"1xl"} borderBottom="1px">ICC TOURNAMENTS</Th>
        <Th></Th>
        <Th fontSize={"1xl"} borderBottom="1px">AUSTRALIA DOMESTIC</Th>
      </Tr>
      <Tr>
      <Td color={"Highlight"}>ICC Women's Championship</Td>
        <Td></Td>
        <Td color={"Highlight"}>Sheffield Shield</Td>
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>Men's Cricket World Cup League 2</Td>
        <Td></Td>
        <Td color={"Highlight"}>BBL  2022</Td>
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>ICC CWC Super League</Td>
        <Td></Td>
        <Td color={"Highlight"}>WNC LEAGUE</Td>
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>CWC Challenge League Group B</Td>
        <Td></Td>
        <Td color={"Highlight"}>WBBL 2022</Td>
      
      </Tr>
      <Tr>
      <Td color={"Highlight"}>ICC World Test Championship</Td>
        <Td></Td>
        <Td color={"Highlight"}>The Marsh Cup</Td>
      
      </Tr>
      <Tr>
      <Th ></Th>
        <Th></Th>
        <Th fontSize={"1xl"} borderBottom="1px">ENGLAND DOMESTIC</Th>
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>County Div1</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>County Div2</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>100  (Men's) </Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>100 (Women's)</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>RL Cup</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>Vitality Blast</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>RHF CUP</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}></Td>
      
      </Tr>
      <Tr>
      <Th ></Th>
        <Th></Th>
        <Th fontSize={"1xl"} borderBottom="1px">INDIA DOMESTIC</Th>
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>TNPL 2022</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}></Td>
      
      </Tr>
      <Tr>
      <Th ></Th>
        <Th></Th>
        <Th fontSize={"1xl"} borderBottom="1px">SRILANKA DOMESTIC</Th>
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>LPL 2022</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>MAJOR CLUBS LA</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}></Td>
      
      </Tr>
      <Tr>
      <Th ></Th>
        <Th></Th>
        <Th fontSize={"1xl"} borderBottom="1px">WEST INDIES DOMESTIC</Th>
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>CPL 2022</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>WCPL 2022</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>WICB 4-day</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>WICB 4-day</Td>
      
      </Tr>
      <Tr>
      <Td ></Td>
        <Td></Td>
        <Td color={"Highlight"}>WICB 4-day</Td>
      
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
 {/* vikash */}
</Box>
<Box border='' borderRadius='lg' w='20%'  marginLeft={""} backgroundColor={"lightgrey"} padding={"9px"}>
 
 <Box>   
           <Heading>ANDY SCHOLAR</Heading>
           <Text>FRANCHISE CRICKET</Text>
       </Box>
       <Box>
           <Image src='https://pbs.twimg.com/card_img/1549785758344568837/Cr54UqCp?format=jpg&name=600x314' alt='l1' />
       </Box>
       <Box>
           <Heading>CSA T20 league likely to have four overseas players, no transformation targets</Heading>
           <Text>Good piece by @ESPNcricinfo's @FirdoseM on the future of cricket.
 https://www.espncricinfo.com/story/explainer-what-has-csa-done-and-how-will-it-impact-cricket-s-future-1324601 …
 
 
 
 Explainer: What has CSA done, and how will it impact cricket's future?
 What happens if South Africa fail to qualify for the World Cup? And what are the implications for the ODI format?
 
 espncricinfo.com</Text>
       </Box>
       <Box>
           <Box><Image src='https://pbs.twimg.com/card_img/1549664093409361922/-CkkHBOO?format=jpg&name=600x314' /></Box>
           <Box>
               <Heading>Daniel Mumby</Heading>
               <Text>"The game wishes him well: there is so much left for @jbairstow21 to give, and so much love still to receive. He's just got to keep floating."
 
 More great insight from @mcjnicholas for @ESPNcricinfohttps://www.espncricinfo.com/story/mark-nicholas-jonny-bairstow-and-the-art-of-zen-batting-1324034 …
 
 
 
 Jonny Bairstow and the art of zen batting
 This summer, the England batter has ascended to a higher plane, occupied by the likes of Viv Richards, Virat Kohli, AB de Villiers and Sachin Tendulkar in the past
 
 espncricinfo.com
 Jul 15, 2022
 
 
 Rajesh Likhe-Patil
 @rajypat
 Fascinating read.https://www.espncricinfo.com/story/mark-nicholas-jonny-bairstow-and-the-art-of-zen-batting-1324034 …
 
 
 
 Jonny Bairstow and the art of zen batting
 This summer, the England batter has ascended to a higher plane, occupied by the likes of Viv Richards, Virat Kohli, AB de Villiers and Sachin Tendulkar in the past
 
 espncricinfo.com</Text>
           </Box>
       </Box>
       <Box>
           <ChevronRightIcon color='blue' />
           <Link _hover={{color: "blue"}} >Graeme Smith in charge of SA's T20 league</Link>
       </Box>
       <Box>   
           <Heading>South Africa Cricket Board</Heading>
           <Text>FRANCHISE CRICKET</Text>
       </Box>
       <Box>
           <Image src='https://pbs.twimg.com/card_img/1549785758344568837/Cr54UqCp?format=jpg&name=600x314' alt='l1' />
       </Box>
       <Box>   
           <Heading>ANDY SCHOLAR</Heading>
           <Text>FRANCHISE CRICKET</Text>
       </Box>
       
       <Box>
           <Heading>CSA T20 league likely to have four overseas players, no transformation targets</Heading>
           <Text>Good piece by @ESPNcricinfo's @FirdoseM on the future of cricket.
 https://www.espncricinfo.com/story/explainer-what-has-csa-done-and-how-will-it-impact-cricket-s-future-1324601 …
 
 
 
 Explainer: What has CSA done, and how will it impact cricket's future?
 What happens if South Africa fail to qualify for the World Cup? And what are the implications for the ODI format?
 
 espncricinfo.com</Text>
       </Box>
       <Box>   
           <Heading>Daniel Brettig 🏏
</Heading>
           <Text></Text>
       </Box>
       <Box>
           <Heading></Heading>
           <Text> <Box>
           <Heading>@Des</Heading>
           <Text>Good piece by @ESPNcricinfo's @FirdoseM on the future of cricket.
           <Box>
           <Image src=' https://pbs.twimg.com/card_img/1548343883179823104/OK0eGiVk?format=jpg&name=600x314' alt='l1' />
       </Box>
          
 
 
 
 Explainer: What has CSA done, and how will it impact cricket's future?
 What happens if South Africa fail to qualify for the World Cup? And what are the implications for the ODI format?
 
 espncricinfo.com</Text>
       </Box>
 
 espncricinfo.com</Text>
       </Box>
 </Box>
 </div>

 
</div>

    
    
  )
}

export default Scoredescription