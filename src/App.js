import React, { useEffect, useState } from 'react'
import { Box, Flex } from 'gestalt'
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Box paddingX={12} paddingY={4}>
      <Box paddingX={12}>
        <Navigation />
        <Home />
      </Box>
    </Box>
  );
}

export default App;
