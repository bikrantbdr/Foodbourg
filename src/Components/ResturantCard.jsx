"use client"
import React from 'react'
import { Flex, Box, Button } from "@chakra-ui/react"
import Image from 'next/image'
import { CiStar, CiLocationArrow1 } from 'react-icons/ci'

const PopularCusineCard = ({ item }) => {
    return (
        <>
            <Flex width={{ base: "45%", md: "30%", lg: "23%" }} alignItems={"center"} flexDirection={"column"} marginBottom={"2.5rem"}>
                <Image src={item.img} alt="popular" width="100%" height="100%" border-radius="10px" />

                <Flex justifyContent={"left"} width="100%" mt="1rem">
                    <Box fontSize={"1.5rem"} fontWeight={"600"}> {item.name} </Box>
                </Flex>
                <Flex justifyContent={"left"} alignItems={"center"} width="100%" mt="0.5rem">
                    <Flex fontSize={"1.25rem"} justifyContent={"center"} alignItems={"center"}>
                        <Box color={"#FFA620"} pr="0.5rem"> <CiStar /> </Box>
                        {item.rating}
                    </Flex>
                    <Flex ml="2rem" fontSize={"1.25rem"} color="#C41E24" justifyContent={"center"} alignItems={"center"}>
                        <Box color={"#c41e24"} pr="0.5rem"> <CiLocationArrow1 /> </Box>
                        {item.distance}
                    </Flex>


                </Flex>

            </Flex>
        </>
    )
}

export default PopularCusineCard