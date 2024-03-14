import { Grid, GridItem } from "@chakra-ui/react";

export default function PortfolioGrid() {
  return (
    <Grid
      mt={8}
      h="150vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      display={{ base: "none", lg: "grid" }}
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
    </Grid>
  );
}
