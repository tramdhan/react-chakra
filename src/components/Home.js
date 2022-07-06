import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import { useStores } from "../store";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Home = observer(() => {
  const { mainStore, userStore } = useStores();

  return (
    <>
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Story
            </Text>
            <Heading>Reusable Functional Components</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
              <Feature
                icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Export to Excel (coming soon)"}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Sendmail (coming soon)"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
});

export default Home;
