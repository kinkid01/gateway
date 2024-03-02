import { Box } from "@chakra-ui/react";
import Bg from "../../assets/images/Bg.png";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <Box
        bgImage={Bg}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="100%"
        alignContent="center"
        p={"2rem"}
      >
        <Navbar />
        <Banner />
      </Box>
    </>
  );
};

export default Header;
