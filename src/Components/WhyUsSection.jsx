"use client"
import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { WhyChooseUsData } from "../Data/Populardata"
const WhyUsSection = () => {
    return (
        <>
            <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={20} width="100%">
                <Flex flexDirection={'column'} alignItems={"center"}>
                    <Box fontSize={"2rem"} fontWeight={"bold"} textAlign={"center"}>Why People Choose FoodBourg?</Box>
                    <Box fontSize={"12px"} color="#718096">Client’s Most Popular Choice</Box>
                </Flex>
                <Flex width="90%" justifyContent={"space-evenly"} mt="2rem" wrap={"wrap"}>
                    {WhyChooseUsData.map((item) => (
                        <Flex flexDirection={"column"} alignItems={"center"} width={{ base: "50%", md: "45%", lg: "23%" }} key={item.id} pt={`${item.id == 2 | item.id == 4 ? "55px" : "0px"}`} pb={"2rem"} >
                            <Flex fontSize={"1rem"} background={"#C41E24"} color="white" justifyContent={"center"} alignItems={"center"} width="2rem" height="2rem" borderRadius="50%">
                                {item.id}
                            </Flex>
                            <Flex width="100%" fontSize={"1rem"} fontWeight={"500"} justifyContent={"left"} mt="0.5rem">{item.title}</Flex>
                            <Flex width="100%" fontSize={"12px"} color="#718096" justifyContent={"left"} mt="0.5rem">{item.body}</Flex>
                        </Flex>
                    ))}

                </Flex>
            </Flex>

        </>
    )
}

export default WhyUsSection