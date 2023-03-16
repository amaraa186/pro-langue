import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, Image } from "gestalt"
import Choices from "../components/Choices";
import Prices from "../components/Prices";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <Box paddingY={4}>
            <Box paddingY={4}>
                <Box width="100%" height={700}>
                    <Image alt="Home Image" 
                        naturalHeight={1} 
                        naturalWidth={1} 
                        src="https://img.freepik.com/free-vector/people-with-technology-devices_52683-34717.jpg?w=1060&t=st=1667914178~exp=1667914778~hmac=36cefe1b9b2e3f7345fb4b6870dd21475e80b4361ecc177ebd6339227f5c5e99"
                        loading="lazy"
                        fit="cover"
                    />
                </Box>
            </Box>
            <Box paddingX={4} paddingY={6}>
                <Heading size="500">БИДНИЙГ СОНГОХ ШАЛТГААН</Heading>
                <Box height={20} />
                <Choices />
            </Box>
            <Box paddingX={4} paddingY={6}>
                <Heading size="500">ТАНД САНАЛ БОЛГОХ БАГЦУУД</Heading>
                <Box height={20} />
                <Prices />
            </Box>
        </Box>
    )
}

export default Home;