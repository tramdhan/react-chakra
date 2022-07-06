import React from "react";
import { Box, Heading, Link, Image, Text, HStack, Tag, useColorModeValue, Container } from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">About this site</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: "100%", sm: "85%" }} zIndex="2" marginLeft={{ base: "0", sm: "5%" }} marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1565055887414-3c2b21f9cd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: "3", sm: "0" }}>
          <BlogTags tags={["Functional", "Ideas"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}></Link>
          </Heading>
          <Text as="p" marginTop="2" color={useColorModeValue("gray.700", "gray.200")} fontSize="lg">
            React components with advanced real-world functionality.
          </Text>
          <BlogAuthor name="Trevor Ramdhan" date={new Date()} />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
