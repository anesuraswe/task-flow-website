
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { features } from "../data";

const Features = () => {
  return (
    <Box
      as="section"
      id="features"
      px={{ base: 6, md: 16 }}
      py={{ base: 16, md: 24 }}
      bg="white"
    >
      {/* Section Heading */}
      <VStack gap={4} textAlign="center" mb={12}>
        <Text
          color="blue.800"
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          Features
        </Text>

        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="1"
          fontWeight="bold"
          color="gray.800"
        >
          Everything you need to stay productive
        </Heading>

        <Text
          color="gray.600"
          fontSize={{ base: "md", md: "lg" }}
          maxW="650px"
          lineHeight="1.8"
        >
          TaskFlow brings your tasks, projects, and productivity
          tools together in one simple workspace.
        </Text>
      </VStack>

      {/* Feature Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {features.map((feature) => {
          const FeatureIcon = feature.icon;

          return (
            <Box
              key={feature.title}
              p={8}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="2xl"
              bg="white"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl",
                borderColor: "blue.300",
              }}
            >
              <VStack align="start" gap={5}>
                {/* Icon */}
                <Box
                  p={4}
                  bg="blue.50"
                  color="blue.800"
                  borderRadius="xl"
                >
                  <FeatureIcon size={30} />
                </Box>

                {/* Title */}
                <Heading
                  fontSize="xl"
                  color="gray.800"
                >
                  {feature.title}
                </Heading>

                {/* Description */}
                <Text
                  color="gray.600"
                  lineHeight="1.8"
                  fontSize="md"
                >
                  {feature.description}
                </Text>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
