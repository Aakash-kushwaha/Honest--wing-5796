import React, { useState } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import PlayerCard from './PlayerCard';
import { AusTestBatters, AusOdiBatters, AusT20IBatters, AusTestBowlers, AusOdiBowlers, AusT20IBowlers} from './PlayerData';
import RightPart from './RightPart';


const RightTPart = () => {
  const [isTestB, setTestB] = useState(true);
  const [isOdiB, setOdiB] = useState(false);
  const [isT20B, setT20B] = useState(false);
  const [isTestBo, setTestBo] = useState(true);
  const [isOdiBo, setOdiBo] = useState(false);
  const [isT20Bo, setT20Bo] = useState(false);

  const handleBat = (v) => {
    if(v === 'test'){
      setTestB(true);
      setOdiB(false);
      setT20B(false);
    }else if(v === 'odi'){
      setTestB(false);
      setOdiB(true);
      setT20B(false);
    }else if(v === 't20'){
      setTestB(false);
      setOdiB(false);
      setT20B(true);
    }
  }

  const handleBowl = (v) => {
    if(v === 'testBo'){
      setTestBo(true);
      setOdiBo(false);
      setT20Bo(false);
    }else if(v === 'odiBo'){
      setTestBo(false);
      setOdiBo(true);
      setT20Bo(false);
    }else if(v === 't20Bo'){
      setTestBo(false);
      setOdiBo(false);
      setT20Bo(true);
    }
  }


  return (
    <Box w='24%'>
      <Box border='1px' borderColor="gray.200" borderRadius='xl' mb='1rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
        <Box p='1rem' borderBottom='1px' borderColor="gray.200">
          <Text fontWeight='700'>Top Run Scorers</Text>
          <Text fontSize='14px' color='#6C6D6F'>In last one year</Text>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Text w='33%' textAlign='center' borderBottom={isTestB ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBat('test')}>Test</Text>
          <Text w='33%' textAlign='center' borderBottom={isOdiB ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBat('odi')}>ODI</Text>
          <Text w='33%' textAlign='center' borderBottom={isT20B ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBat('t20')}>T20I</Text>
        </Box>
        {isTestB && AusTestBatters.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        {isOdiB && AusOdiBatters.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        {isT20B && AusT20IBatters.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        <Box p='0.5rem 1rem'>
          <Link fontSize='17px' fontWeight='700' color='#03a9f4'><Text textAlign='center'>View all stats</Text></Link>
        </Box>
      </Box>
      <Box border='1px' borderColor="gray.200" borderRadius='xl' mb='1rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
        <Box p='1rem' borderBottom='1px' borderColor="gray.200">
          <Text fontWeight='700'>Top Wicket Takers</Text>
          <Text fontSize='14px' color='#6C6D6F'>In last one year</Text>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Text w='33%' textAlign='center' borderBottom={isTestBo ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBowl('testBo')}>Test</Text>
          <Text w='33%' textAlign='center' borderBottom={isOdiBo ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBowl('odiBo')}>ODI</Text>
          <Text w='33%' textAlign='center' borderBottom={isT20Bo ? '2px' : 'none'} cursor='pointer' borderColor='#03a9f4' onClick={() => handleBowl('t20Bo')}>T20I</Text>
        </Box>
        {isTestBo && AusTestBowlers.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        {isOdiBo && AusOdiBowlers.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        {isT20Bo && AusT20IBowlers.map(tB => (<PlayerCard key={tB.id} {...tB} />))}
        <Box p='0.5rem 1rem'>
          <Link fontSize='17px' fontWeight='700' color='#03a9f4'><Text textAlign='center'>View all stats</Text></Link>
        </Box>
      </Box>
      <RightPart />
    </Box>
  )
}

export default RightTPart