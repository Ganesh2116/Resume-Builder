import React from "react";
import Steps from "./components/Steps";
import { Center, Flex, Title } from "@mantine/core";

const App = () => {
  return (
    <>
      <Center maw={1200} mx="auto" pb={100} pt={20}>
        <Flex direction="column" gap="lg" pt="50">
          <Title order={3} size="h1">
            Resume buildber
          </Title>
          <Steps />
        </Flex>
      </Center>
    </>
  );
};
export default App;
