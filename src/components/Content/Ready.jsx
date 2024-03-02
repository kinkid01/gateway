import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Phone1 from "../../assets/images/Phone1.png";
import Phone2 from "../../assets/images/Phone2.png";
import Google from "../../assets/images/GooglePlay.png";
import Apple from "../../assets/images/Apple.png";

const Ready = () => {
  return (
    <Box bg={"#000000"} pt={"10rem"} h="100%">
      <Flex direction={{ base: "column", md: "row" }}>
        <Image src={Phone1} alt="" pb={{ base: "2rem", md: 0 }} />
        <Container
          maxW={{ base: "100%", md: "2xl" }}
          pb={{ base: "2rem", md: 0 }}
        >
          <Flex
            w={"100%"}
            h={"100%"}
            align="center"
            justify="center"
            direction="column"
            textAlign={"center"}
          >
            <Heading as={"h2"} color={"white"}>
              Ready to get started?
            </Heading>
            <Text color={"#FFFFFF"} pt={"2rem"}>
              You've seen the process, it's easy.
            </Text>
            <Button
              color="white"
              bgColor="#960822"
              height="6vh"
              width={{ base: "25vw", md: "8vw" }}
              fontSize="15px"
              _hover={{ bg: "#db1634" }}
              mt={"2rem"}
              ml={{ base: 0, md: "1rem" }}
            >
              Get Started
            </Button>
            <Flex
              justify="center"
              pt={"5rem"}
              width={{ base: "40vw", md: "100%" }}
              gap={{ base: "1rem", md: "3rem" }}
            >
              <Image src={Google} alt="" />
              <Image src={Apple} alt="" />
            </Flex>
          </Flex>
        </Container>
        <Image src={Phone2} alt="" />
      </Flex>
    </Box>
  );
};

export default Ready;
