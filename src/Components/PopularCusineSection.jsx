"use client"
import { Flex, Box } from "@chakra-ui/react"
import React from 'react'
import { popularCusineData } from "@/Data/Populardata"
import PopularCusineCard from "./PopularCusineCard"

const PopularCusineSection = () => {
    return (
        <Flex width="100%" alignItems={"center"} flexDirection={"column"} mt="5rem">

            <Flex justifyContent={"space-between"} align={"center"} width="90%">
                <Box fontSize={"1.5rem"} fontWeight={"600"}> Popular Cusines </Box>
                <Box fontSize={"0.75rem"} color="#C41E24" > View All </Box>
            </Flex>

            <Flex wrap={"wrap"} width="90%" justifyContent={"space-between"} mt="2rem">
                {popularCusineData.map((item, index) => {
                    return (
                        <PopularCusineCard item={item} key={index} />
                    )
                })
                }
            </Flex>
        </Flex>
    )
}

export default PopularCusineSection