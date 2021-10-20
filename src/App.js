import {
  Container,
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Container minW="100vw" bg="#FEFFFE" minH="100vh" overflow="hidden" >
      <Box
        bg="white"
        p={0}
        mt={16}
        boxShadow="xl"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        >
        <Stack  direction={["column-reverse", "row"]}> 
          <Box p={16} flex="2">
            <Heading>You Are Invited</Heading>
            <Text mt={1} fontSize="22px">
              Let the challenge begin
            </Text>
            <Text as="p" my={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
              <InputGroup>
              <Input placeholder="Enter Email" _hover={{}} borderRadius="xl" borderColor="#ED399A" borderWidth="2px" _focus={{}}/>
                <InputRightElement w="100px" >
                 <Button borderBottomLeftRadius="2xl" bg="#ED399A" color="#FDFEF9" _hover={{}}>Join Me In</Button>
                 </InputRightElement>
              </InputGroup>
          </Box>

          <Box flex="2">
            <Image
              src="https://cdn.thetealmango.com/wp-content/uploads/2021/10/squiddd.jpg"
              height="100%"
              width="100%"
              borderRightRadius="lg"
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
