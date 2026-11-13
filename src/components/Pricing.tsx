
import {
  Box,
  Button,
  
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { Check } from "lucide-react";
import { pricingPlans } from "../data/pricing-data";

const Pricing = () => {
  return (
    <Box
      id="pricing"
      py={20}
      px={{ base: 5, md: 16 }}
      bg="gray.50"
    >
      {/* Section Heading */}
      <VStack gap={3} textAlign="center" mb={14}>
        <Text
          color="blue.800"
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          Pricing Plans
        </Text>

        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Simple pricing for everyone
        </Heading>

        <Text color="gray.600" fontSize="lg" maxW="600px">
          Choose the right plan to manage your projects,
          stay organized, and achieve more with TaskFlow.
        </Text>
      </VStack>

      {/* Pricing Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        maxW="1200px"
        mx="auto"
        alignItems="stretch"
      >
        {pricingPlans.map((plan) => (
          <Box
            key={plan.name}
            position="relative"
            bg="white"
            borderRadius="2xl"
            p={8}
            border="1px solid"
            borderColor={plan.popular ? "blue.700" : "gray.200"}
            boxShadow={plan.popular ? "xl" : "sm"}
            transform={{ base: "none", md: plan.popular ? "scale(1.04)" : "none" }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <Box
                position="absolute"
                top="-14px"
                left="50%"
                transform="translateX(-50%)"
                bg="blue.800"
                color="white"
                px={4}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
                whiteSpace="nowrap"
              >
                MOST POPULAR
              </Box>
            )}

            <VStack align="stretch" gap={6}>
              {/* Plan Information */}
              <Box>
                <Heading size="lg" mb={2}>
                  {plan.name}
                </Heading>

                <Text color="gray.500" fontSize="sm">
                  {plan.description}
                </Text>
              </Box>

              {/* Price */}
              <HStack align="baseline" gap={1}>
                <Heading fontSize="4xl">
                  {plan.price}
                </Heading>
                <Text color="gray.500">
                  {plan.period}
                </Text>
              </HStack>

              {/* CTA Button */}
              <Button
                colorPalette='blue.800'
                variant={plan.popular ? "solid" : "outline"}
                size="lg"
                width="100%"
              >
                {plan.buttonText}
              </Button>

              {/* Features */}
              <Box>
                <Text
                  fontWeight="semibold"
                  mb={4}
                  color="gray.700"
                >
                  What's included:
                </Text>

                <VStack align="stretch" gap={4}>
                  {plan.features.map((feature) => (
                    <HStack key={feature} gap={3}>
                      <Check
                        size={18}
                        color="#081e50"
                      />

                      <Text color="gray.600" fontSize="sm">
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Pricing;
