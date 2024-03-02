import React from "react";
import {
  Box,
  Text,
  Center,
  Stack,
  Heading,
  Image,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import Facebook from "../../assets/images/Facebook.png";
import Google from "../../assets/images/GooglePlay.png";
import Apple from "../../assets/images/Apple.png";

const Footer = () => {
  return (
    <Box bg="#000000" minHeight="100vh" pt={{ base: 0, md: "3rem" }}>
      <Center minHeight="100%">
        <Box
          marginBottom="2rem"
          width="90%"
          bg="#171717"
          mt={{ base: "5rem", md: "0" }}
          borderRadius="20px"
          px={{ base: "1rem", md: "2rem" }}
          py={{ base: "2rem", md: "4rem" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "2rem", md: "6rem" }}
            lineHeight={{ base: "1.8rem", md: "1.8rem" }}
            justifyContent="center"
            alignItems="flex-start"
            pb={{ base: "2rem", md: "4rem" }}
          >
            <Box>
              <Heading
                as="h1"
                color="white"
                fontWeight="md"
                fontSize="larger"
                pb={{ base: 0, md: "1rem" }}
              >
                Products
              </Heading>
              <Stack>
                <NavLink to="/">
                  <Text color="#9E9E9E">Adventures</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">Discover</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">Games</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">Help</Text>
                </NavLink>
              </Stack>
            </Box>
            <Box>
              <Heading
                as="h1"
                color="white"
                fontWeight="md"
                fontSize="larger"
                pb={{ base: 0, md: "1rem" }}
              >
                Help
              </Heading>
              <Stack>
                <NavLink to="/">
                  <Text color="#9E9E9E">Contact Us</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">FAQ</Text>
                </NavLink>
              </Stack>
            </Box>
            <Box>
              <Heading
                as="h1"
                color="white"
                fontWeight="md"
                fontSize="larger"
                pb={{ base: 0, md: "1rem" }}
              >
                Trust & Legal
              </Heading>
              <Stack>
                <NavLink to="/">
                  <Text color="#9E9E9E">Terms & Conditions</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">Privacy</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">Cookie</Text>
                </NavLink>
              </Stack>
            </Box>
            <Box>
              <Heading
                as="h1"
                color="white"
                fontWeight="md"
                fontSize="larger"
                pb={{ base: 0, md: "1rem" }}
              >
                Contact
              </Heading>
              <Stack>
                <NavLink to="/">
                  <Text color="#9E9E9E">email@mygatewayapp.co</Text>
                </NavLink>
                <NavLink to="/">
                  <Text color="#9E9E9E">+234 8000 000 000</Text>
                </NavLink>
              </Stack>
            </Box>
            <Box>
              <Heading
                as="h1"
                color="white"
                fontWeight="md"
                fontSize="larger"
                pb={{ base: 0, md: "1rem" }}
              >
                Socials
              </Heading>
              <HStack spacing={5} pt="0.5rem">
                <NavLink to="/">
                  <Image src={Instagram} alt="instagram" />
                </NavLink>
                <NavLink to="/">
                  <Image src={Twitter} alt="twitter" />
                </NavLink>
                <NavLink to="/">
                  <Image src={Facebook} alt="facebook" />
                </NavLink>
              </HStack>
            </Box>
          </Stack>
          <Flex
            color="white"
            pt={{ base: "3rem", md: "7rem" }}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "center" }}
            alignItems="center"
          >
            <Box>
              <NavLink to="/">Sign In</NavLink>
              <Button
                color="white"
                bgColor="#960822"
                height="5vh"
                fontSize="15px"
                ml="1rem"
                _hover={{ bg: "#db1634" }}
              >
                Join Gateway
              </Button>
            </Box>
            <Box>
              <HStack
                spacing={5}
                ml={{ base: "0", md: "30rem" }}
                pt={{ base: "2rem", md: 0 }}
              >
                <Image w={{ base: "30vw", md: "10vw" }} src={Apple} alt="" />
                <Image w={{ base: "30vw", md: "10vw" }} src={Google} alt="" />
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Footer;
