import { Box, Stack } from "@chakra-ui/react";
import Adventure from "./components/Content/Adventure";
import Community from "./components/Content/Community";
import Content from "./components/Content/Content";
import Ready from "./components/Content/Ready";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Box w={"full"} overflow={"hidden"}>
        <Header />
        <Content />
        <Adventure />
        <Community />
        <Ready />
        <Footer />
      </Box>
    </>
  );
}

export default App;
