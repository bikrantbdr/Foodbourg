"use client"
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { orderimages } from '@/Images/images'
import Image from 'next/image'
import OrderCardComponent from '@/Components/orderCardComponent'

const OrderStep = () => {
    return (
        <>
            <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mt={20} width="100%">
                <Flex flexDirection={'column'} alignItems={"center"}>
                    <Box fontSize={"2rem"} fontWeight={"bold"}>How To Order?</Box>
                    <Box fontSize={"12px"} color="#718096">Follow These Steps</Box>
                </Flex>

                <Flex justifyContent={"space-evenly"} alignItems={"center"} width="100%" height={{ base: "auto", md: "500px" }} flexDirection={{ base: 'column', md: "row" }}>
                    {orderimages.map((item) => {
                        return (
                            <OrderCardComponent key={item.id} item={item} />
                        )
                    })}
                </Flex>



            </Flex>
        </>
    )
}

export default OrderStep