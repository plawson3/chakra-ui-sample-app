import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/header';
import Pricing from "./components/pricing";
import Features from './components/Features';

function App() {
  return (
    <Box>
      <Header />
      <Pricing/>
      <Features/>
    </Box>
  );
}

export default App;
