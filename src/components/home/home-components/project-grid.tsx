import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

export default function ProjectGrid() {
  return (
    <Grid
      mt={8}
      h="70vh"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      display={{ base: "none", md: "grid" }}
    >
      <GridItem
        rowSpan={1}
        colSpan={2}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={2}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        bg="#D9D9D9"
        borderRadius={"10px"}
      ></GridItem>
      <GridItem colSpan={2} bg="#D9D9D9" borderRadius={"10px"}></GridItem>
    </Grid>
  );
}
