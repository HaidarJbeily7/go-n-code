import { Flex, Box } from "@chakra-ui/react";

export default function PartnerList() {
  interface ImageBoInterface {
    src: string;
  }

  const ImageBox = ({ src }: ImageBoInterface) => (
    <Box
      w={["50%", "20%"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
      py={8}
    >
      <img src={src} style={{ maxWidth: "100%", height: "auto" }} />
    </Box>
  );

  return (
    <Flex
      my={16}
      mx={0}
      justifyContent={"space-around"}
      flexWrap="wrap"
      bg={["#F8F9FC", "#ffffff"]}
    >
      <ImageBox src="/homepage/companies/co-5.svg" />
      <ImageBox src="/homepage/companies/co-4.svg" />
      <ImageBox src="/homepage/companies/co-3.svg" />
      <ImageBox src="/homepage/companies/co-2.svg" />
      <ImageBox src="/homepage/companies/co-1.svg" />
    </Flex>
  );
}
