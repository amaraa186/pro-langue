import React, { useEffect, useState } from 'react'
import { Box, Flex } from 'gestalt'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Box paddingX={12}>
      <Box paddingX={12} paddingY={4}>
        <Navigation />
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
