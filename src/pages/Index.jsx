import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, Select } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Remote Tech Jobs
        </Text>
        <HStack spacing={4}>
          <Button onClick={() => setSelectedCategory("")} colorScheme={selectedCategory === "" ? "blue" : "gray"}>
            All
          </Button>
          <Button onClick={() => setSelectedCategory("Product")} colorScheme={selectedCategory === "Product" ? "blue" : "gray"}>
            Product
          </Button>
          <Button onClick={() => setSelectedCategory("Design")} colorScheme={selectedCategory === "Design" ? "blue" : "gray"}>
            Design
          </Button>
          <Button onClick={() => setSelectedCategory("Engineering")} colorScheme={selectedCategory === "Engineering" ? "blue" : "gray"}>
            Engineering
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {filteredJobs.map((job) => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Text fontSize="xl">{job.title}</Text>
              <Text>{job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;