"use client"
import { Flex, Box } from "@chakra-ui/react"
import React from 'react'
import { popularFoodData } from "@/Data/Populardata"
import PopularCard from "./PopularCard"

const PopularSection = () => {
    return (
        <Flex width="100%" alignItems={"center"} flexDirection={"column"} mt="5rem">

            <Flex justifyContent={"space-between"} align={"center"} width="90%">
                <Box fontSize={"1.5rem"} fontWeight={"600"}> Popular Food in your area </Box>
                <Box fontSize={"0.75rem"} color="#C41E24" > View All </Box>
            </Flex>

            <Flex wrap={"wrap"} width="90%" justifyContent={"space-between"} mt="2rem">
                {popularFoodData.map((item) => {
                    return (
                        <PopularCard key={item.id} item={item} />
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default PopularSection