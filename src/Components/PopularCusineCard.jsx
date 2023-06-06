"use client"
import React from 'react'
import { Flex, Box, Button } from "@chakra-ui/react"
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'

const PopularCusineCard = ({ item }) => {
    return (
        <>
            <Flex width={{ base: "45%", md: "30%", lg: "23%", xl: "15%" }} alignItems={"center"} flexDirection={"column"} marginBottom={"2.5rem"}>
                <Image src={item.img} alt="popular" width="100%" height="100%" border-radius="10px" />

                <Flex justifyContent={"space-between"} width="90%" mt="1rem">
                    <Box fontSize={"1rem"} fontWeight={"600"}> {item.typeofcusine} </Box>
                    <Box fontSize={"0.75rem"} color="#C41E24" > {item.price} </Box>
                </Flex>
                <Flex justifyContent={"left"} alignItems={"center"} width="90%" mt="0.5rem">
                    <CiLocationOn />
                    <Box fontSize={"1rem"} color={"#718096"} textTransform={"capitalize"}> {item.location} </Box>
                </Flex>
                <Box width="100%" mt="1rem">
                    <Button width="100%" colorScheme="red"> Order Now </Button>
                </Box>

            </Flex>
        </>
    )
}

export default PopularCusineCard