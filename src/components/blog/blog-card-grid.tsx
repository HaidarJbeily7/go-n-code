import { Text, Box, Image, Stack, Grid, GridItem } from "@chakra-ui/react";

interface BlogCardProps {
  img: string;
  date: string;
  header: string;
}

const BlogCard = ({ img, date, header }: BlogCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      justifySelf={"center"}
      p={4}
      maxW={"sm"}
    >
      <Image src={img} borderRadius="lg" mb={4} />
      <Stack spacing={3}>
        <Text fontWeight={500} fontSize="16px" color="#737588">
          {date}
        </Text>
        <Text fontWeight={700} fontSize="20px" color="#101A29">
          {header}
        </Text>
      </Stack>
    </Box>
  );
};

const BlogCardGrid = () => {
  return (
    <Grid
      mt={20}
      gap={8}
      mx={[8]}
      // Responsive grid column setup
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
    >
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="Web development can change the world"
      />

      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="Exploring the depths of space with web technology"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
      <BlogCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
    </Grid>
  );
};

export default BlogCardGrid;
