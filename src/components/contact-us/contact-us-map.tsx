import { Box, Image } from "@chakra-ui/react";
import MapHeader from "./map-header";
import { url } from "inspector";

export default function ContactUsMap() {
  return (
    <Box>
      <Box position={"relative"}>
        <MapHeader />
      </Box>
      <Box position={"relative"}>
        <MapHeader />
      </Box>
      <Box position={"relative"}>
        <MapHeader />
      </Box>
      <Image src="/contact-us/map.png" minW={"100%"} minH={300} />
    </Box>
  );
}
