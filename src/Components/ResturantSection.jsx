"use client"
import { Flex, Box } from "@chakra-ui/react"
import React from 'react'
import { popularResturantData } from "@/Data/Populardata"
import ResturantCard from "./ResturantCard"

const PopularCusineSection = () => {
    return (
        <Flex width="100%" alignItems={"center"} flexDirection={"column"} mt="5rem">

            <Flex justifyContent={"space-between"} align={"center"} width="90%">
                <Box fontSize={"1.5rem"} fontWeight={"600"}> Nearby Resturants </Box>
                <Box fontSize={"0.75rem"} color="#C41E24" > View All </Box>
            </Flex>

            <Flex wrap={"wrap"} width="90%" justifyContent={"space-between"} mt="2rem">
                {popularResturantData.map((item, index) => {
                    return (
                        <ResturantCard item={item} key={index} />
                    )
                })
                }
            </Flex>
        </Flex>
    )
}

export default PopularCusineSection