'use client'
import { Flex, Box, Button, Spacer, IconButton, useDisclosure } from '@chakra-ui/react'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import Logo from '../Images/logobase.svg'
import Image from 'next/image'

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Flex w="100vw" justifyContent={'center'} >
            <Flex justifyContent={"space-between"} alignItems={"center"} h={"50px"} w={"100%"} margin="25px 59px">
                {/* Logo */}
                <Flex justifyContent={"left"} alignItems={"center"} w='10%' zIndex={"101"}>
                    <Image src={Logo} alt="logo" width="50" height="50" />
                    <Box ml="0.5rem" fontSize={{ base: '1rem', xl: '1.5rem' }} fontWeight={"600"} color={"#C41E24"}>
                        Foodbourg
                    </Box>
                </Flex>
                {/* Bottons  */}
                <Button
                    display={{ base: 'block', lg: 'none' }}
                    onClick={onToggle}
                    zIndex={"101"}
                >
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </Button>
                {/* Big screen navbar */}
                <Flex w={{ base: '80%', xl: "70%" }} justifyContent={"space-between"} display={{ base: 'none', lg: 'flex' }} >
                    {/* Location */}
                    <Flex justifyContent={'left'} color={"#718096"} alignItems={"center"}>
                        <Box mr="10px">
                            Select location
                        </Box>
                        <Box>
                            <CiLocationOn />
                        </Box>
                    </Flex>
                    <Spacer />
                    {/* Navlinks */}
                    <Flex justifyContent={"right"} gap={{ base: '20px', xl: '35px' }} alignItems={'center'}>
                        <Box>
                            Deivery
                        </Box>
                        <Box>
                            Takeaway
                        </Box>
                        <Box>
                            dining
                        </Box>
                        <Box>
                            Login
                        </Box>
                        <Button h={"50px"} w={{ base: '200px', xl: '250px' }} bg={"#C41E24"} color={"white"} borderRadius={"10px"} >
                            Start ordering
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex position={"fixed"} top={"0px"} left={"0"} w={"100%"} h={"100vh"} gap={"30px"} bg={"#fff"} zIndex={"100"} display={isOpen ? 'flex' : 'none'} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} >
                <Flex justifyContent={'left'} color={"#718096"} alignItems={"center"}>
                    <Box mr="10px">
                        Select location
                    </Box>
                    <Box>
                        <CiLocationOn />
                    </Box>
                </Flex>
                <Box>
                    Deivery
                </Box>
                <Box>
                    Takeaway
                </Box>
                <Box>
                    dining
                </Box>
                <Box>
                    Login
                </Box>
                <Button h={"50px"} w={{ base: '200px', xl: '250px' }} bg={"#C41E24"} color={"white"} borderRadius={"10px"} >
                    Start ordering
                </Button>

            </Flex>

        </Flex>



    )
}