import React, { useState, useEffect } from 'react'
import { Box, Text, TapArea } from 'gestalt'

const Button = (props) => {
    const { text } = props;
    return (
        <TapArea onTap={() => {}}>
            <Box paddingX={6} paddingY={3} rounding={1} color="shopping">
                <Text color="light" weight='bold' align='center' size={200}>{text.toUpperCase()}</Text>
            </Box>
        </TapArea>
    )
}

export default Button;