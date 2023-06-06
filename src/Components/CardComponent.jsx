import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image';

const CardComponent = ({ item }) => {
    return (
        <>
            <Flex background={"#FAFAFA"} flexDirection={"column"} w={{ base: "50%", md: "27%" }} height={{ base: "175px", lg: "250px", xl: "275px" }} justifyContent={'center'} alignItems={"center"} borderRadius={"10px"} border={"1px #97979780 solid"} >
                <Image src={item.img} alt="item.title" width="80%" height="auto" />
                <box margin="12px 0 0 0 ">
                    {item.title}
                </box>
            </Flex >
        </>
    )
}

export default CardComponent