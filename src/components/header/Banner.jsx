import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import X from "../../assets/images/X.png";
import R from "../../assets/images/R.png";
import Circle from "../../assets/images/Circle.png";
import Rectangle from "../../assets/images/Rectangle.png";

const Banner = () => {
  return (
    <Box
      width={"100%"}
      color={"white"}
      minHeight={"100vh"}
      mt={"3rem"}
      position="relative"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        alignItems="center"
        position="relative"
      >
        <Image
          src={R}
          alt=""
          position={{ base: "relative", md: "static" }}
          top={{ base: "10rem", md: 0 }}
          right={{ base: "11rem", md: 0 }}
          mb={{ base: "2rem", md: 0 }}
          width={{ base: "15vw", md: "15vw" }}
        />
        <Heading
          size="3xl"
          pl={{ base: "1rem", md: "4rem" }}
          pt={{ base: "4rem", md: "13rem" }}
          lineHeight={{ base: "3rem", md: "5rem" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize={{ base: "4xl", md: "6xl" }}>
            Your Gateway to a New Era of
          </Text>
          <Text fontSize={{ base: "4xl", md: "6xl" }}>
            Gaming and Amazing Rewards!
          </Text>
        </Heading>
        <Image
          src={X}
          alt=""
          position={{ base: "relative", md: "relative" }}
          mt={{ base: "2rem", md: 0 }}
          ml={{ base: "auto", md: 0 }}
          bottom={{ base: "20rem", md: "5rem" }}
          width={{ base: "24vw", md: "15vw" }}
          right={{ base: 0, md: "18rem" }}
        />
      </Flex>
      <Container mt={"2rem"} pl={{ base: "1rem", md: "9rem" }}>
        <Flex alignItems="center">
          <Text
            color={"white"}
            fontFamily={"body"}
            pr="0.5rem"
            pl={{ base: "4rem", md: 0 }}
          >
            Play-To-Earn
          </Text>
          <Image src={Rectangle} alt="" />
          <Text pl="0.5rem" color={"white"} fontFamily={"body"}>
            Stacking
          </Text>
        </Flex>
        <Button
          color="white"
          bgColor="#960822"
          height="4vh"
          minWidth={{ base: "35vw", md: "10vw" }}
          fontSize={{ base: "12px", md: "15px" }}
          _hover={{ bg: "#db1634" }}
          mt={"2rem"}
          ml={{ base: "5rem", md: "1rem" }}
        >
          Play Games
        </Button>
      </Container>

      <Image
        src={Circle}
        alt=""
        position={{ base: "relative", md: "absolute" }}
        bottom={{ base: "20rem", md: "10rem" }}
        left={{ base: "19rem", md: "73rem" }}
        width={{ base: "40vw", md: "15vw" }}
      />
    </Box>
  );
};

export default Banner;
