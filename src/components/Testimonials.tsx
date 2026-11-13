
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      py={20}
      px={{ base: 5, md: 16 }}
      bg="white"
    >
      {/* Section Heading */}
      <VStack gap={3} textAlign="center" mb={14}>
        <Text
          color="blue.800"
          fontWeight="bold"
          fontSize="sm"
          letterSpacing="2px"
          textTransform="uppercase"
        >
          Testimonials
        </Text>

        <Heading lineHeight={1} fontSize={{ base: "3xl", md: "5xl" }}>
          Loved by productive people
        </Heading>

        <Text
          color="gray.600"
          fontSize="lg"
          maxW="600px"
        >
          See how TaskFlow helps individuals and teams
          stay organized and accomplish more.
        </Text>
      </VStack>

      {/* Testimonial Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.name}
            p={8}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.100"
            borderRadius="2xl"
            boxShadow="sm"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "lg",
              borderColor: "blue.200",
            }}
          >
            <VStack align="stretch" gap={6}>
              {/* Quote Icon */}
              <Flex justify="space-between" align="center">
                <Quote
                  size={32}
                  color="#0c2252"
                  fill="#DBEAFE"
                />

                {/* Star Rating */}
                <HStack gap={1}>
                  {Array.from(
                    { length: testimonial.rating },
                    (_, index) => (
                      <Star
                        key={index}
                        size={16}
                        color="#EAB308"
                        fill="#EAB308"
                      />
                    )
                  )}
                </HStack>
              </Flex>

              {/* Review */}
              <Text
                color="gray.600"
                lineHeight="1.8"
                fontSize="md"
                flex="1"
              >
                "{testimonial.quote}"
              </Text>

              {/* Customer Information */}
              <HStack gap={3}>
                <Flex
                  w="48px"
                  h="48px"
                  rounded="full"
                  bg="blue.100"
                  color="blue.700"
                  align="center"
                  justify="center"
                  fontWeight="bold"
                  flexShrink={0}
                >
                  {testimonial.initials}
                </Flex>

                <Box>
                  <Text fontWeight="bold" color="gray.800">
                    {testimonial.name}
                  </Text>

                  <Text fontSize="sm" color="gray.500">
                    {testimonial.role} · {testimonial.company}
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
