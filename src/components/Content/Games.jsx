import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";
import Tap from "../../assets/images/Tap.png";
import Pad from "../../assets/images/Pad.png";
import Space from "../../assets/images/Space.png";

const Games = () => {
  return (
    <Container maxW={"4xl"}>
      <Heading color={"#DE082F"} textAlign={"center"} fontSize={"2xl"}>
        GAMES
      </Heading>
      <Text
        color={"white"}
        fontFamily={"heading"}
        fontSize={{ base: "2xl", md: "3xl" }}
        align={"center"}
        mt={"1rem"}
        mb={{ base: "3rem", md: 0 }}
        lineHeight={"2rem"}
      >
        <VStack>
          <Text>Immerse yourself in a world of thrilling games powered by</Text>
          <Text>
            cutting-edge blockchain technology. Enjoy a seamless, secure,
          </Text>
          <Text>and transparent gaming environment.</Text>
        </VStack>
      </Text>
      <HStack
        pt={["1rem", "3rem"]}
        flexDirection={["column", "row"]}
        alignItems={["center", "flex-start"]}
      >
        <Box pb={["2rem", "2rem"]}>
          <Image src={Tap} alt="" />
        </Box>
        <Box
          position={"relative"}
          top={{ base: 0, md: "8rem" }}
          pl={{ base: 0, md: "1rem" }}
          pb={["2rem", 0]}
        >
          <Image src={Space} alt="" />
        </Box>
      </HStack>
      <Box textAlign="center" pb={["2rem", 0]}>
        <Image src={Pad} alt="" />
      </Box>
    </Container>
  );
};

export default Games;
