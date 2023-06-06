import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
const OrderCardComponent = ({ item }) => {
    return (
        < Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} width={{ base: "50%", md: "20%" }} pt={{ base: "20px", md: `${item.id === 1 ? "0px" : item.id === 2 ? "200px" : item.id === 3 ? "0px" : "215px"}` }} >
            <Image src={item.img} w={"100px"} h={"100px"} />
            <Flex justifyContent={"center"}
                alignItems={"center"} fontSize={"1rem"}
                width="2rem" height="2rem" fontWeight={"bold"}
                border={"1px #FF8000 dashed"} borderRadius={"50%"}
                margin="3rem 0 2rem 0"
            >{item.id}</Flex>
            <Box color="#718096">{item.title}</Box>
        </Flex>
    )
}

export default OrderCardComponent