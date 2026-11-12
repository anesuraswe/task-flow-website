import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

import heroImg from "../assets/1-Task-Flow.webp";

const Hero = () => {
  return (
    <Flex
      id="home"
      minH="85vh"
      align="center"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      gap={10}
      px={{ base: 6, md: 16 }}
      py={16}
      bg="white"
    >
      {/* Hero Content */}
      <VStack align="start" gap={6} flex="1" maxW="600px">
        <Box bg="blue.100" color="blue.700" px={4} py={2} borderRadius="full">
          <Text fontSize="sm" fontWeight="semibold">
            Your productivity, simplified
          </Text>
        </Box>

        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight="1.1"
          fontWeight="bold"
        >
          Achieve More with TaskFlow
        </Heading>

        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.600"
          lineHeight="1.8"
        >
          Take control of your workflow. Manage projects, organize tasks, and
          collaborate with your team seamlessly using TaskFlow.
        </Text>

        <HStack gap={4} flexWrap="wrap">
          <Button  >
            Get Started
          </Button>

          <Button variant="outline" >
            Learn More
          </Button>
        </HStack>

        <Text fontSize="sm" color="gray.500">
          Plan smarter. Work better. Achieve more.
        </Text>
      </VStack>

      {/* Hero Image */}
      <Box flex="1" width="100%">
        <Image
          src={heroImg}
          alt="TaskFlow productivity dashboard"
          width="100%"
          maxW="650px"
          mx="auto"
          objectFit="contain"
          borderRadius="2xl"
          boxShadow="xl"
        />
      </Box>
    </Flex>
  );
};

export default Hero;
