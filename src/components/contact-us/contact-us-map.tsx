import { Box } from "@chakra-ui/react";
import MapHeader from "./map-header";

export default function ContactUsMap() {
  return (
    <Box w={"100%"}>
      <Box position={"relative"}>
        <MapHeader />
      </Box>
      <Box position={"relative"}>
        <MapHeader />
      </Box>
      <Box position={"relative"}>
        <MapHeader />
      </Box>

      <img src="/contact-us/map.svg" width={"100%"} />
    </Box>
  );
}
