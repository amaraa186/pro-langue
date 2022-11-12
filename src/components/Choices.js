import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "gestalt"

const Choices = () => {
    return (
        <Flex gap={{row: 12, column: 1}} wrap justifyContent="center">
            <Box padding={4} rounding={1} borderStyle="shadow" width={250}>
                <Box height={150} width={150}>
                    <Image 
                        alt="img"
                        naturalHeight={1} 
                        naturalWidth={1} 
                        src="https://cdn-icons-png.flaticon.com/512/4039/4039112.png"
                        loading="lazy"
                    />
                </Box>
                <Box height={10} />
                <Text align="center" weight="bold" size="400">ХААНААС Ч ҮЗЭХ БОЛОМЖТОЙ</Text>
                <Box height={10} />
                <Text align="center">Та хаанаас хэзээд ч хичээлүүдээ үзэх боломжтой.</Text>
            </Box>
            <Box padding={4} rounding={1} borderStyle="shadow" width={250}>
                <Box height={150} width={150}>
                    <Image 
                        alt="img"
                        naturalHeight={1} 
                        naturalWidth={1} 
                        src="https://cdn-icons-png.flaticon.com/512/4039/4039112.png"
                        loading="lazy"
                    />
                </Box>
                <Box height={10} />
                <Text align="center" weight="bold" size="400">ХААНААС Ч ҮЗЭХ БОЛОМЖТОЙ</Text>
                <Box height={10} />
                <Text align="center">Та хаанаас хэзээд ч хичээлүүдээ үзэх боломжтой.</Text>
            </Box>
            <Box padding={4} rounding={1} borderStyle="shadow" width={250}>
                <Box height={150} width={150}>
                    <Image 
                        alt="img"
                        naturalHeight={1} 
                        naturalWidth={1} 
                        src="https://cdn-icons-png.flaticon.com/512/4039/4039112.png"
                        loading="lazy"
                    />
                </Box>
                <Box height={10} />
                <Text align="center" weight="bold" size="400">ХААНААС Ч ҮЗЭХ БОЛОМЖТОЙ</Text>
                <Box height={10} />
                <Text align="center">Та хаанаас хэзээд ч хичээлүүдээ үзэх боломжтой.</Text>
            </Box>
            <Box padding={4} rounding={1} borderStyle="shadow" width={250}>
                <Box height={150} width={150}>
                    <Image 
                        alt="img"
                        naturalHeight={1} 
                        naturalWidth={1} 
                        src="https://cdn-icons-png.flaticon.com/512/4039/4039112.png"
                        loading="lazy"
                    />
                </Box>
                <Box height={10} />
                <Text align="center" weight="bold" size="400">ХААНААС Ч ҮЗЭХ БОЛОМЖТОЙ</Text>
                <Box height={10} />
                <Text align="center">Та хаанаас хэзээд ч хичээлүүдээ үзэх боломжтой.</Text>
            </Box>
        </Flex>
    )
}

export default Choices;