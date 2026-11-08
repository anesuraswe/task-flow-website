
import { Button, Heading, VStack, Text } from "@chakra-ui/react";

function App() {
    return (
        <VStack
            minH="100vh"
            justify="center"
            gap={4}
        >
            <Heading color="blue.600">
                Welcome to TaskFlow
            </Heading>

            <Text color="gray.500">
                Chakra UI is successfully installed!
            </Text>

            <Button colorPalette="blue">
                Get Started
            </Button>
        </VStack>
    );
}

export default App;
