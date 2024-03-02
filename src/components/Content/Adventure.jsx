import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Group from "../../assets/images/Group.png";
import airplane from "../../assets/images/airplane.png";

const Adventure = () => {
  return (
    <Box
      backgroundColor={"#000000"}
      pt={{ base: "3rem", md: "10rem" }}
      h="100%"
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Image src={Group} alt="grouped" />
        <Container
          maxW={{ base: "100%", md: "4xl" }}
          mt={{ base: "5rem", md: 0 }}
        >
          <Stack
            spacing={2}
            pl={{ base: "0", md: "3rem" }}
            textAlign={{ base: "center", md: 0 }}
          >
            <Heading
              as={"h2"}
              color={"#DE082F"}
              fontSize={{ base: "xl", md: "md" }}
            >
              ADVENTURE
            </Heading>
            <Text
              color={"white"}
              fontFamily={"heading"}
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              Enjoy a gamified experience of learning & discovery of web3/
              <br />
              crypto through a story adventures. Create any adventure about
              <br /> any topic of your choice leveraging our specially trained
              AI <br /> models.
            </Text>
          </Stack>
          <Flex
            pt={{ base: "1rem", md: "2rem" }}
            pl={{ base: "0", md: "3rem" }}
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <Box
              w={{ base: "100%", md: "23vw" }}
              mb={{ base: "2rem", md: "0" }}
            >
              <Stack>
                <Box pt={{ base: "5rem", md: 0 }}>
                  <Box
                    bg={"#FFC1C1"}
                    width={{ base: "12vw", md: "3vw" }}
                    h={"6.5vh"}
                    pt={{ base: "1.3rem", md: "0.8rem" }}
                    rounded={"50%"}
                    pl={{ base: "0.8rem", md: "0.7rem" }}
                  >
                    <Image src={airplane} alt="" />
                  </Box>
                  <Box>
                    <Heading
                      as={"h1"}
                      color={"white"}
                      pt={"1rem"}
                      fontWeight={"larg"}
                    >
                      Take Adventures
                    </Heading>
                    <Text color={"#9E9E9E"}>
                      Gateway provides custom adventures and AI generated
                      adventures for users to engage in.
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box w={{ base: "100%", md: "23vw" }}>
              <Stack>
                <Box>
                  <Box
                    bg={"#FFC1C1"}
                    width={{ base: "12vw", md: "3vw" }}
                    h={"6.5vh"}
                    pt={{ base: "1.3rem", md: "0.8rem" }}
                    rounded={"50%"}
                    pl={{ base: "0.8rem", md: "0.7rem" }}
                  >
                    <Image src={airplane} alt="" />
                  </Box>
                  <Box>
                    <Heading
                      as={"h1"}
                      color={"white"}
                      pt={"1rem"}
                      fontWeight={"larg"}
                      fontSize={"30px"}
                    >
                      AI Generated Adventures
                    </Heading>
                    <Text color={"#9E9E9E"}>
                      Gateway provides custom adventures and AI generated
                      adventures for users to engage in.
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Adventure;
