import { Box } from '@chakra-ui/react'
import React from 'react'
import NewsNav from '../Mainbody/NewsNavbar/NewsNav'
import TamperingMainBody from './temparingMainBody/TamperingMainBody'
import TempSideBar from './temparingSideBar/TempSideBar'

const BallTemparing = () => {
  return (
    <>
    <NewsNav />
      <Box
        maxWidth={{
          sm: "90%",
          md: "95%",
          lg: "82%",
        }}
        display="flex"
        gap="20px"
        m="auto"
        marginTop="2rem"
      >
        <Box
          width={{
            sm: "100%",
            md: "100%",
            lg: "70%",
          }}
        >
          <TamperingMainBody />
        </Box>
        <Box
          display={{
            base: "none",
            md: "block",
            lg: "block",
          }}
          width={{
            sm: "0px",
            md: "28%",
          }}
        >
          <TempSideBar/>
        </Box>
      </Box>

      </>
  )
}

export default BallTemparing