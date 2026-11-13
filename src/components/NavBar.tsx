
import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";

import { ListChecks, Menu, X } from "lucide-react";
import { navItems } from "../data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white"
      boxShadow="0 2px 15px rgba(0,0,0,0.06)"
      borderBottom="1px solid"
      borderColor="gray.100"
      borderRadius="full"
      my={3}
      
    >
      <Box maxW="1400px" mx="auto" px={{ base: 3, md: 8 }}>
        <Flex
          h="80px"
          align="center"
          justify="space-between"
        >
          {/* Logo and Brand */}
          <Link
            href="#home"
            _hover={{ textDecoration: "none" }}
          >
            <HStack gap={1} mx={8}>
              <Box
                
                p={2}
                borderRadius="lg"
              >
                <ListChecks size={25} />
              </Box>

              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="gray.800"
                letterSpacing="tight"
              >
                Task<Text as="span" color="blue.800">Flow</Text>
              </Text>
            </HStack>
          </Link>

          {/* Desktop Navigation */}
          <HStack
            gap={8}
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                fontSize="sm"
                fontWeight="semibold"
                color="gray.600"
                transition="all 0.2s"
                _hover={{
                  color: "blue.800",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Desktop CTA */}
          <Button
            display={{ base: "none", md: "inline-flex" }}
            
            // colorPalette="blue"
            // size="lg"
            // borderRadius="sm"
            // px={2}
            mx={8}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            variant="ghost"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <VStack
            display={{ base: "flex", md: "none" }}
            align="stretch"
            gap={4}
            pb={6}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                py={2}
                fontWeight="medium"
                color="gray.700"
                onClick={() => setIsOpen(false)}
                _hover={{
                  color: "blue.600",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}

            <Button
              
              width="100%"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
