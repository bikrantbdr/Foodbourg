"use client"
import React from 'react'
import { Flex, Box } from "@chakra-ui/react"
import Image from 'next/image'
import { CiLocationOn, CiStar, CiClock2 } from 'react-icons/ci'

const PopularCard = ({ item }) => {
    return (
        <>
            <Flex width={{ base: "45%", md: "30%", lg: "23%" }} alignItems={"center"} flexDirection={"column"} marginBottom={"2.5rem"} gap="20px">
                <Image src={item.img} alt="popular" width="100%" height="100%" border-radius="10px" />

                <Flex justifyContent={"space-between"} width="90%" mt="1rem">
                    <Box fontSize={"1rem"} fontWeight={"600"}> {item.location} </Box>
                    <Box fontSize={"0.75rem"} color="#C41E24" > {item.price} </Box>
                </Flex>

                <Flex justifyContent={"space-between"} width="90%" mt="0.5rem">
                    <Flex fontSize={"1rem"} justifyContent={"center"} alignItems={"center"}>
                        <Box color={"#c41e24"}> <CiLocationOn /> </Box>
                        {item.distance}
                    </Flex>
                    <Flex fontSize={"1rem"} justifyContent={"center"} alignItems={"center"}>
                        <Box color={"#FFA620"}> <CiStar /> </Box>
                        {item.rating}
                    </Flex>
                    <Flex fontSize={"1rem"} justifyContent={"center"} alignItems={"center"}>
                        <Box color={"#C41E24"}> <CiClock2 /> </Box>
                        {item.time}
                    </Flex>

                </Flex>
            </Flex >
        </>
    )
}

export default PopularCard