
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar/index'
import '../../styles/globals.css'

import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  button:{
    primary:"#2a69ac"
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
