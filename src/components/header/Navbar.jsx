import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/logo.png";
import AntHead from "../../assets/images/AntHead.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
    >
      <Flex align="center" mr={5}>
        <Image src={logo} alt="logo" width="100px" />
      </Flex>

      <IconButton
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Open Menu"
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            background="rgba(0,0,0,0.1)"
            backdropFilter="blur(70px)"
            color={"white"}
            lineHeight={"2rem"}
          >
            <DrawerCloseButton />
            <DrawerBody>
              <List spacing={3} pt={"3rem"}>
                <ListItem>
                  <NavLink to="/">Home</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/">Adventure</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/">Discover</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/">Games</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/">Sign In</NavLink>
                </ListItem>
              </List>
              <Button
                colorScheme="red"
                size="sm"
                marginTop="2"
                onClick={onClose}
                mt={"1rem"}
              >
                Join Gateway
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box
        display={{ base: "none", md: "block" }}
        color="white"
        borderRadius="10px"
        background="rgba(0,0,0,0.1)"
        backdropFilter="blur(70px)"
        paddingY="0.5rem"
        width={{ base: 0, md: "32vw" }}
        // ml={{ base: 0, md: "25rem" }}
      >
        <List
          display="flex"
          alignItems="center"
          alignContent="center"
          gap={7}
          pl={{ base: 0, md: "2rem" }}
        >
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Adventure</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">
              <Image width="2rem" src={AntHead} alt="logo" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Discover</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/">Games</NavLink>
          </ListItem>
        </List>
      </Box>

      <Box display={{ base: "none", md: "block" }} color="white">
        <NavLink to="/">Sign In</NavLink>
        <Button
          color="white"
          bgColor="#960822"
          height="4vh"
          fontSize="15px"
          marginLeft="1rem"
          _hover={{ bg: "#db1634" }}
        >
          Join Gateway
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
