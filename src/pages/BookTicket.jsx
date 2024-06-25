import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Button, VStack, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual booking logic
    console.log({ name, email, tickets });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="tickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <NumberInput min={1} value={tickets} onChange={(value) => setTickets(value)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Book Tickets</Button>
      </VStack>
    </Container>
  );
};

export default BookTicket;