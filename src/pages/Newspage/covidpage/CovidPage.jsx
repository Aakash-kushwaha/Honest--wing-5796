import { Box } from '@chakra-ui/react'
import React from 'react'
import CovidMainBody from './CovidMainBody/CovidMainBody'
import CovidSideBar from './CovidSideBar/CovidSideBar'

const CovidPage = () => {
  return (
    <Box maxWidth={{
        sm:"90%",
        md:"95%",
        lg:"82%"
      }} display="flex" gap="20px" m="auto" marginTop="2rem">
        <Box width={{
          sm:"100%",
          md:"100%",
          lg:"70%"
        }}>
          <CovidMainBody />
        </Box>
        <Box  display={{
          base:"none",
          md:"block",
          lg:"block",
      
         
        }} width={{
          sm:"0px",
          md:"28%"
        }}>
          <CovidSideBar />
        </Box>
      </Box>
  )
}

export default CovidPage