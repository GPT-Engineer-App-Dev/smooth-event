import { Container, Text, VStack, Heading, Box, Button, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Box>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" m={2}>
            View Events
          </Button>
          <IconButton aria-label="Add Event" icon={<FaPlus />} colorScheme="teal" size="lg" m={2} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;