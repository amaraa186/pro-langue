import React, { useEffect, useState } from "react";
import { TapArea, Flex, Heading, Text, Link } from "gestalt"
import Button from "./Button";

const Navigation = () => {
    return(
        <Flex justifyContent="between" alignItems='center'>
            <Flex alignItems='center' gap={{row: 8, column: 1}}>
                <Heading>Pro Langue</Heading>
                <TapArea>
                    <Text size={200}>ХИЧЭЭЛҮҮД</Text>
                </TapArea>
            </Flex>
            <Flex alignItems='center' gap={{row: 8, column: 2}}>
                <TapArea>
                    <Text size={200}>НЭВТРЭХ</Text>
                </TapArea>
                <Button text='Бүртгүүлэх' />
            </Flex>
        </Flex>
    )
}

export default Navigation;