import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { navItems } from "../data";

const NavBar = () => {
  return (
    <Box
      as="nav"
      px={{ base: 5, md: 16 }}
      py={4}
      bg="white"
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex align="center" justify="space-between">
        <Image src={logo} px={4} />
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "blue.500" }}
            >
              {item.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
