import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle event creation can be added here
    console.log({ name, date, location, description });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create Event</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Event Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Event Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;