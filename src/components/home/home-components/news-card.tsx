// import {
//   Text,
//   Button,
//   Card,
//   CardBody,
//   Image,
//   Stack,
//   Flex,
// } from "@chakra-ui/react";

// interface NewsCardProps {
//   img: string;
//   date: string;
//   header: string;
// }

// export default function NewsCard({ img, date, header }: NewsCardProps) {
//   return (
//     <Card maxW="sm" m={{ base: 10 }} minH={"100%"}>
//       <CardBody>
//         <Image src={img} borderRadius="lg" />
//         <Stack my={6} mx={4} spacing="3">
//           <Flex gap={2}>
//             <img src="/homepage/services/news-calender.svg" />
//             <Text fontWeight={500} fontSize={"16px"} color={"#737588"}>
//               {date}
//             </Text>
//           </Flex>

//           <Text fontWeight={500} fontSize={"20px"} color={"#101A29"}>
//             {header}
//           </Text>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// }

import { Text, Box, Image, Stack, Grid, GridItem } from "@chakra-ui/react";

interface NewsCardProps {
  img: string;
  date: string;
  header: string;
}

const NewsCard = ({ img, date, header }: NewsCardProps) => {
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

const NewsCardGrid = () => {
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
      <NewsCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="Web development can change the world"
      />

      <NewsCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="Exploring the depths of space with web technology"
      />
      <NewsCard
        img="/homepage/polish-square.svg"
        date="October 19, 2022"
        header="The future of AI in web development"
      />
    </Grid>
  );
};

export default NewsCardGrid;
