import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, IconButton } from "gestalt"

const Footer = () => {
    return (
        <Box color="recommendationBase" padding={12}>
            <Flex>
                <Box padding={4} column={3}>
                    <Heading size="400" color="light">ABOUT US</Heading>
                    <Text color="light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </Box>
                <Box padding={4} column={4}>
                    <Heading size="400" color="light">LINKS</Heading>
                    <Text color="light">
                        Prices
                    </Text>
                    <Text color="light">
                        Prices
                    </Text>
                    <Text color="light">
                        Prices
                    </Text>
                </Box>
                <Box padding={4} column={3}>
                    <Heading size="400" color="light">SOCIAL</Heading>
                    <IconButton iconColor="white" icon="facebook" />
                    <IconButton iconColor="white" icon="gmail" />
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer;