import { Box, Flex, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box  bgGradient="linear(to-r, purple.500, pink.400)" color="gray.200" py={6} mt={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {/* Kiri - Teks */}
        <Text mb={{ base: 4, md: 0 }} fontSize="sm">
          &copy; {new Date().getFullYear()} Bagus Viki Amalindo. All rights reserved.
        </Text>

        {/* Kanan - Icon Sosial */}
        <Flex gap={4}>
          <Link href="mailto:vamalindo@gmail.com" isExternal>
            <IconButton
              icon={<FaEnvelope />}
              variant="ghost"
              aria-label="Email"
              colorScheme="gray"
            />
          </Link>
          <Link href="https://github.com/amalindouser" isExternal>
            <IconButton
              icon={<FaGithub />}
              variant="ghost"
              aria-label="GitHub"
              colorScheme="gray"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/bagus-viki-amalindo-903966268/" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              variant="ghost"
              aria-label="LinkedIn"
              colorScheme="gray"
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
