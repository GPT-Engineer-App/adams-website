import { Box, Flex, Heading, Text, Button, Image, Link, VStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKb2huJTIwQWRhbXMlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQzMDcxNTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Adams" mb={4} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          John Adams
        </Heading>
        <Text fontSize="xl" color="gray.500">
          Software Developer | Tech Enthusiast | Open Source Contributor
        </Text>
      </Box>

      <Box my={10}>
        <Text fontSize="lg" p={3}>
          Hello! I'm John Adams, a passionate software developer with a focus on creating impactful and efficient digital solutions. With expertise in modern technologies and a commitment to open source, I strive to contribute to projects that enhance community and technology.
        </Text>
        <Text fontSize="lg" p={3}>
          I specialize in full-stack development, with a keen interest in React, Node.js, and cloud services. I believe in continuous learning and am always exploring new technologies to stay at the forefront of the industry.
        </Text>
      </Box>

      <VStack spacing={5}>
        <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="solid">
          <Link href="https://www.linkedin.com/in/johnadams" isExternal>
            LinkedIn
          </Link>
        </Button>
        <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="solid">
          <Link href="https://github.com/johnadams" isExternal>
            GitHub
          </Link>
        </Button>
        <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="solid">
          <Link href="mailto:john.adams@example.com" isExternal>
            Email Me
          </Link>
        </Button>
      </VStack>
    </Flex>
  );
};

export default Index;
