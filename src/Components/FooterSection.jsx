"use client";
import { Flex, Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../Images/logobase.svg';
import googleplay from '../Images/googleplay.png';

import React from 'react'
const FooterSection = () => {
    return (
        <>
            {/* container */}
            <Flex w="100vw" justifyContent={'center'} mt="3rem">
                <Flex flexDirection={"column"} width="100%" justifyContent={"center"} alignItems={"center"}>
                    <Flex justifyContent={"center"} width="100%" mb="3rem" wrap={"wrap"} gap="20px">
                        <Flex flexDirection={"column"} alignItems={"center"} width={{ base: "45%", md: "33%", lg: "20%" }} >
                            <Flex justifyContent={"center"} alignItems={"center"}>
                                <Image src={Logo} alt="Logo" width={100} height={100} />
                                <Box pl="1rem" fontSize={20} fontWeight={500} color={"#C41E24"}>FoodBourg</Box>
                            </Flex>
                            <Box fontSize={14} color={"#718096"} w="80%">FoodBourg is an Online Food Delivery Company <br /> rooted in the year 2022 A.D at Luxembourg.</Box>
                        </Flex>
                        <Flex flexDirection={"column"} alignItems={{ base: 'center', lg: "left" }} width={{ base: "45%", md: "33%", lg: "20%" }}>
                            <Box pb="0.8rem" fontSize={20} fontWeight={500}>Foodbourg Us</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>About Us</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Available area</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Delivery Charges</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Blogs</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Terms and Conditions</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Privacy Policy</Box>
                        </Flex>
                        <Flex flexDirection={"column"} alignItems={{ base: 'center', lg: "left" }} width={{ base: "45%", md: "33%", lg: "20%" }}>
                            <Box pb="0.8rem" fontSize={20} fontWeight={500}>Get Help</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>How To Order?</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>FAQs</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Contact Us</Box>
                        </Flex>
                        <Flex flexDirection={"column"} alignItems={{ base: 'center', lg: "left" }} width={{ base: "45%", md: "33%", lg: "20%" }}>
                            <Box pb="0.8rem" fontSize={20} fontWeight={500}>Quick Links</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Facebook</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Instagram</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Twitter</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Resturants</Box>
                        </Flex>
                        <Flex flexDirection={"column"} alignItems={{ base: 'center', lg: "left" }} width={{ base: "45%", md: "33%", lg: "20%" }}>
                            <Box pb="0.8rem" fontSize={20} fontWeight={500}>Address</Box>
                            <Box pb="0.5rem" fontSize={14} color={"#718096"}>Kathmandu,Mangalbazar</Box>
                            <Box mb="0.75rem">
                                <Image src={googleplay} alt="Logo" width={150} height={100} />
                            </Box>
                            <Box mb="1rem">
                                <Image src={googleplay} alt="Logo" width={150} height={100} />
                            </Box>


                        </Flex>




                    </Flex>
                    <Box mb="3rem" w="85%">
                        © 2020 FoodBourg Pvt. Ltd. All Rights Reserved | Product Of Lanceme Up
                    </Box>

                </Flex>
            </Flex>
        </>
    )
}

export default FooterSection