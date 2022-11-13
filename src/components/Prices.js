import React from "react";
import { Box, Flex, Text, Heading, Button, Icon } from "gestalt"

const CheckedText = (props) => {
    const { text, color } = props;
    return (
        <Flex alignItems="center" gap={2}>
            <Icon icon="check-circle" accessibilityLabel="icon" color={color == "blue" ? "shopping" : "light"} />
            <Text color={color == "blue" ? "dark" : "light"}>{text}</Text>
        </Flex>
    )
}

const Prices = () => {
    return (
        <Flex gap={{row: 0, column: 1}} wrap justifyContent="center">
            <Box paddingY={4}>
                <Box width={350} paddingY={4} paddingX={12} rounding={2} borderStyle="shadow">
                    <Heading align="center">LIGHT</Heading>
                    <Box height={10} />
                    <Text align="center">Suitable for Startups, Bloggers and Basic websites</Text>
                    <Box height={10} />
                    <Heading align="center" color="shopping">$450</Heading>
                    <Box height={10} />
                    <Button text="Buy" color="blue" fullWidth />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                </Box>
            </Box>
            <Box width={350} paddingY={4} paddingX={12} rounding={2} borderStyle="shadow" color="shopping">
                <Heading align="center" color="light">LIGHT</Heading>
                <Box height={10} />
                <Text align="center" color="light">Suitable for Startups, Bloggers and Basic websites</Text>
                <Box height={10} />
                <Heading align="center" color="light">$450</Heading>
                <Box height={10} />
                <Button text="Buy" fullWidth />
                <Box height={10} />
                <CheckedText text={"Light, modern, clean and simple"} color="white" />
                <Box height={10} />
                <CheckedText text={"Light, modern, clean and simple"} color="white" />
                <Box height={10} />
                <CheckedText text={"Light, modern, clean and simple"} color="white" />
                <Box height={10} />
                <CheckedText text={"Light, modern, clean and simple"} color="white" />
            </Box>
            <Box paddingY={4}>
                <Box width={350} paddingY={4} paddingX={12} rounding={2} borderStyle="shadow">
                    <Heading align="center">LIGHT</Heading>
                    <Box height={10} />
                    <Text align="center">Suitable for Startups, Bloggers and Basic websites</Text>
                    <Box height={10} />
                    <Heading align="center" color="shopping">$450</Heading>
                    <Box height={10} />
                    <Button text="Buy" color="blue" fullWidth />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                    <Box height={10} />
                    <CheckedText text={"Light, modern, clean and simple"} color="blue" />
                </Box>
            </Box>
        </Flex>
    )
}

export default Prices;