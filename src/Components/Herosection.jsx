"use client"
import React from 'react'
import { Box, Flex, FormControl, Input, IconButton, InputRightElement, InputGroup, Button } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import { heroimages } from '@/Images/images';
import Burger from '@/Images/burgergroup.png';
import CardComponent from './CardComponent';
import Image from 'next/image';

const Herosection = () => {
    return (
        <>
            {/* container */}
            <Flex w="100vw" alignItems={'center'} mt="1rem" flexDirection={"column"}>
                <Flex width={"90%"} mb="1rem" flexDirection={{ base: "column", xl: "row" }} alignItems="center" gap={{ base: '35px', xl: "5px" }}>
                    {/* left */}
                    <Flex flexDirection={"column"} alignItems={'center'} width={{ base: '100%', xl: "40%" }}>
                        <Box fontSize="45px" fontWeight={700} width={'80%'} >
                            Giving Your <Box as='span' color="#C41E24"> Hunger</Box> <br />
                            A New Option
                        </Box>
                        <Box fontSize="20px" fontWeight={400} color="#718096" width={'80%'} padding="1rem 0 0 0">
                            Taste The Best Foods Available In The Town At <br /> FoodBourg and Enjoy The Tech Infused Environment.
                        </Box>
                        <Box w={{ base: "90%", xl: "80%" }} padding="2rem 0 0 0">
                            <FormControl >
                                <InputGroup>
                                    <Input placeholder='Search Your Favourites Food And Cusines' />
                                    <InputRightElement>
                                        <IconButton
                                            aria-label="Search"
                                            icon={<FaSearch />}
                                            bg={"#718096"}
                                        />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>
                    </Flex>
                    {/* right */}
                    <Flex width={{ base: "100%", xl: "60%" }} justifyContent={"space-around"} alignItems={"center"} flexDirection={{ base: "column", md: "row" }} gap={"20px"} >
                        {heroimages.map((item) => {
                            return (
                                <CardComponent item={item} key={item.id} />
                            )
                        }
                        )}

                    </Flex>
                </Flex>

                {/* promotional section */}
                <Flex width={"100%"} height={{ base: "auto", lg: "375px" }} margin="2rem 0 0 0" color={'#fff'} alignItems={'center'} flexDirection={"column"}>

                    <Box display={'flex'} padding="2rem" justifyContent={{ base: "center", lg: "space-around" }} background={"#000000"} width="90%" borderRadius={"10px"} flexDirection={{ base: 'column-reverse', lg: "row" }}  >
                        <Flex flexDirection={"column"} alignItems={{ base: "center", lg: 'left' }} width={{ base: "90%", lg: "45%" }}>
                            <Box fontSize={{ base: "35px", lg: "50px", xl: "55px" }} fontWeight={700} >
                                Get upto <Box as='span' color="#C41E24"> 50% </Box> offer on<br />
                                Festival season!
                            </Box>
                            <Box>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti at odit alias deleniti veniam dolorum.
                            </Box>
                            <Box>
                                <Button h={"50px"} w={"250px"} bg={"#C41E24"} color={"white"} borderRadius={"10px"} mt="0.75rem" >
                                    Order now
                                </Button>
                            </Box>
                        </Flex>
                        <Flex flexDirection={"column"} alignItems={'center'} width={{ base: "100%", lg: "30%" }} justifyContent={"center"}>
                            <Image src={Burger} alt="burger" width="250" height="250" />
                        </Flex>
                    </Box>
                    {/* three dots */}
                    <Flex justifyContent={"center"} fontSize={"3rem"}>
                        <Box color="#c41e24" >
                            .
                        </Box>
                        <Box color="#718096" >
                            ..
                        </Box>
                    </Flex>

                </Flex>
            </Flex>

        </>
    )
}

export default Herosection