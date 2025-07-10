// src/components/Navbar.jsx
import React from 'react';
import { HStack, Box, Link, Text, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="white"
      color="purple"
      px="6"
      py="4"
      zIndex="999"
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Amalindo
        </Text>
        <HStack spacing={6}>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
