import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  ListChecks,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { navItems } from "../data";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      pt={16}
      pb={6}
      px={{ base: 5, md: 16 }}
    >
      <Box maxW="1200px" mx="auto">

        {/* Main Footer Content */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={12}
          pb={12}
        >

          {/* Brand Information */}
          <VStack align="start" gap={4}>
            <HStack gap={2}>
              <Box
                
                p={2}
                borderRadius="lg"
              >
                <ListChecks size={25} color="white" />
              </Box>

              <Text fontSize="2xl" fontWeight="bold">
                Task<Text as="span" color="blue.400">Flow</Text>
              </Text>
            </HStack>

            <Text
              color="gray.400"
              lineHeight="1.8"
              maxW="300px"
            >
              Simplify your workflow, manage your projects,
              and achieve more with TaskFlow.
            </Text>

            {/* Social Media Links */}
            <HStack gap={4} pt={2}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                <FaGithub size={21} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                <FaLinkedin size={21} />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                <FaXTwitter size={21} />
              </Link>

              <Link
                href="mailto:hello@taskflow.com"
                aria-label="Email"
                color="gray.400"
                _hover={{ color: "white" }}
              >
                <Mail size={21} />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" gap={4}>
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>

            <VStack align="start" gap={3}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color="gray.400"
                  fontSize="sm"
                  _hover={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </VStack>

          {/* Contact Information */}
          <VStack align="start" gap={4}>
            <Text fontWeight="bold" fontSize="lg">
              Get in Touch
            </Text>

            <Text color="gray.400" fontSize="sm">
              Have questions or need assistance?
              We'd love to hear from you.
            </Text>

            <Link
              href="mailto:hello@taskflow.com"
              color="blue.400"
              fontSize="sm"
              fontWeight="medium"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{ color: "white" }}
            >
              hello@taskflow.com
              <ArrowUpRight size={16} />
            </Link>
          </VStack>

        </SimpleGrid>

        {/* Divider */}
        <Box
          borderTop="1px solid"
          borderColor="gray.700"
          pt={6}
        >
          <Flex
            justify="space-between"
            align={{ base: "start", md: "center" }}
            direction={{ base: "column", md: "row" }}
            gap={4}
          >
            <Text color="gray.500" fontSize="sm">
              © {new Date().getFullYear()} TaskFlow.
              All rights reserved.
            </Text>

            <HStack gap={6}>
              <Link
                href="#privacy"
                color="gray.500"
                fontSize="sm"
                _hover={{ color: "white" }}
              >
                Privacy Policy
              </Link>

              <Link
                href="#terms"
                color="gray.500"
                fontSize="sm"
                _hover={{ color: "white" }}
              >
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;