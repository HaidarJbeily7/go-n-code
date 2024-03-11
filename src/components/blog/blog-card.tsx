import {
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

interface BlogCardProps {
  img: string;
  date: string;
  header: string;
}

export default function BlogCard({ img, date, header }: BlogCardProps) {
  return (
    <Card maxW="md" boxShadow="lg">
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <Stack my={6} mx={4} spacing="3">
          <Flex gap={2}>
            <img src="/homepage/services/news-calender.svg" />
            <Text fontWeight={500} fontSize={"16px"} color={"#737588"}>
              {date}
            </Text>
          </Flex>
          <Text
            fontWeight={500}
            fontSize={"20px"}
            lineHeight={"26px"}
            color={"#101A29"}
          >
            {header}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
