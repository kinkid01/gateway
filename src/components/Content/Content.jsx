import React from "react";
import Games from "./Games";
import { Box } from "@chakra-ui/react";

const Content = () => {
  return (
    <Box backgroundColor={"#000000"} p={"2rem"} h="100%">
      <Games />
    </Box>
  );
};

export default Content;
