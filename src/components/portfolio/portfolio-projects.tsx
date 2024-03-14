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
import PortfolioCard from "./portfolio-card";

export default function PortfolioProjects() {
  return (
    <div
      className="flex  flex-col bg-[#FFFFFF] "
      style={{
        background: "#FFFFFF",
      }}
    >
      <Flex
        justifyContent={"center"}
        mx={{ base: 2, md: 24 }}
        mt={{ base: 8, md: 24 }}
      >
        <Breadcrumb
          separator=""
          fontWeight={400}
          fontSize={{ base: "10px", md: "15px", lg: "20px" }}
          color={"#666666"}
          spacing={{ base: 1, md: 4 }}
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
      <PortfolioCard
        img="/homepage/project1.png"
        title="Mobile and Web Design"
        name="company name"
      />
      <PortfolioCard
        img="/homepage/project2.png"
        title="Logo  Design"
        name="company name"
      />
      <PortfolioCard
        img="/homepage/project3.png"
        title="card Design"
        name="company name"
      />
      <Flex justifyContent={"center"} mb={28}>
        <PortfolioButton text="Lets Start a project" marginx={0} marginy={16} />
      </Flex>
    </div>
  );
}
