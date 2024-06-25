import { Container, Text, VStack, Heading, Box, Button, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus, FaTicketAlt } from "react-icons/fa"; // Import the ticket icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Index = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Box>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" m={2}>
            View Events
          </Button>
          <IconButton aria-label="Add Event" icon={<FaPlus />} colorScheme="teal" size="lg" m={2} onClick={() => navigate("/create-event")} />
          <IconButton aria-label="Book Ticket" icon={<FaTicketAlt />} colorScheme="teal" size="lg" m={2} onClick={() => navigate("/book-ticket")} /> {/* Add button to navigate to BookTicket */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;