import {
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

interface NewsCardProps {
  img: string;
  date: string;
  header: string;
}

export default function NewsCard({ img, date, header }: NewsCardProps) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <Stack my={6} mx={4} spacing="3">
          <Flex gap={2}>
            <img src="/homepage/services/news-calender.svg" />
            <Text fontWeight={500} fontSize={"16px"} color={"#737588"}>
              {date}
            </Text>
          </Flex>

          <Text fontWeight={500} fontSize={"20px"} color={"#101A29"}>
            {header}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
