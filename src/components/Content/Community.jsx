import { Box, Container, Stack, Text, Heading, Image } from "@chakra-ui/react";
import Telegram from "../../assets/images/Telegram.png";
import Twitter from "../../assets/images/Twitter.png";
import Discord from "../../assets/images/Discord.png";

const Community = () => {
  return (
    <Box
      backgroundColor={"#000000"}
      pt={{ base: "2rem", md: "10rem" }}
      h="100%"
    >
      <Container
        maxW={"7xl"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Stack
          flex={{ base: 1, md: 2 }}
          justify={{ base: "center", md: "flex-start" }}
          pl={{ base: 0, md: "4rem" }}
        >
          <Heading
            as="h1"
            color="white"
            fontWeight={"large"}
            fontSize={{ base: "2xl", md: "4xl" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Meet our community <br /> worldwide
          </Heading>
          <Text color={"#BABABA"} textAlign={{ base: "center", md: "left" }}>
            Join a fast-growing community.
          </Text>
        </Stack>
        <Stack pl={{ base: 0, md: "13rem" }} pt={{ base: "4rem", md: 0 }}>
          <Box display={"flex"}>
            <Image
              src={Telegram}
              alt="telegram"
              pr={"1rem"}
              w={{ base: "12%", md: "3.5vw" }}
              h={{ base: "12%", md: "5vh" }}
            />
            <Heading
              color={"white"}
              fontWeight={"md"}
              fontSize={{ base: "md", md: "2xl" }}
            >
              Telegram
            </Heading>
          </Box>
          <Text color={"#BABABA"} pt={"0.5rem"} pl={{ base: 0, md: "3.5rem" }}>
            Ask general questions and chat with the worldwide <br /> community
            on Telegram.
          </Text>
          <Box display={"flex"} pt={"2rem"}>
            <Image
              src={Twitter}
              alt="twitter"
              pr={"1rem"}
              w={{ base: "12%", md: "3.5vw" }}
              h={{ base: "12%", md: "5vh" }}
            />
            <Heading
              color={"white"}
              fontWeight={"md"}
              fontSize={{ base: "md", md: "2xl" }}
            >
              Twitter
            </Heading>
          </Box>
          <Text color={"#BABABA"} pt={"0.5rem"} pl={{ base: 0, md: "3.5rem" }}>
            Follow @mygatewayapp to get the latest news and <br /> updates from
            across the ecosystem.
          </Text>
          <Box display={"flex"} pt={"2rem"}>
            <Image
              src={Discord}
              alt="discord"
              pr={"1rem"}
              w={{ base: "12%", md: "3.5vw" }}
              h={{ base: "12%", md: "5vh" }}
            />
            <Heading
              color={"white"}
              fontWeight={"md"}
              fontSize={{ base: "md", md: "2xl" }}
            >
              Discord
            </Heading>
          </Box>
          <Text color={"#BABABA"} pt={"0.5rem"} pl={{ base: 0, md: "3.5rem" }}>
            Have technical questions about Gateway? Ask a <br /> developer on
            the community Discord.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Community;
