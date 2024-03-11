import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
} from "@chakra-ui/react";
import PortfolioGrid from "./portfolio-grid";
import PortfolioButton from "./portfolio-button";

export default function PortfolioProjects() {
  return (
    <div
      className="flex  flex-col bg-[#FFFFFF] m-16"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Flex justifyContent={"center"}>
        <Breadcrumb
          separator=""
          fontWeight={400}
          fontSize={"20px"}
          color={"#666666"}
          spacing={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">All</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Web Development</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">UI/UX Design</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">category</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Box mt={16} mx={24}>
        <PortfolioGrid />
      </Box>
      <Flex justifyContent={"center"} mb={28}>
        <PortfolioButton text="Lets Start a project" marginx={0} marginy={16} />
      </Flex>
    </div>
  );
}
