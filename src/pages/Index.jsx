import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, StackDivider } from "@chakra-ui/react";

const jobListings = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobListings : jobListings.filter(job => job.category === filter);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
        <Text fontSize="3xl" fontWeight="bold">Remote Tech Job Board</Text>
        <HStack spacing={4}>
          <Button colorScheme={filter === "All" ? "blue" : "gray"} onClick={() => setFilter("All")}>All</Button>
          <Button colorScheme={filter === "Product" ? "blue" : "gray"} onClick={() => setFilter("Product")}>Product</Button>
          <Button colorScheme={filter === "Design" ? "blue" : "gray"} onClick={() => setFilter("Design")}>Design</Button>
          <Button colorScheme={filter === "Engineering" ? "blue" : "gray"} onClick={() => setFilter("Engineering")}>Engineering</Button>
        </HStack>
        <VStack spacing={4} w="100%">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" w="100%">
              <Text fontSize="xl">{job.title}</Text>
              <Text mt={4} color="gray.500">{job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;