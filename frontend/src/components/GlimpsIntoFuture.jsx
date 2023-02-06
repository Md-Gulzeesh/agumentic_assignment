import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ApiImg1 from "../assets/api_img1.png";
import ApiImg2 from "../assets/api_img2.png";
import ApiImg3 from "../assets/api_img3.png";

const GlimpsIntoFuture = () => {
  return (
    <Flex gap={"20px"} direction={"column"} textAlign={"center"} p={"5rem 0"}>
      <Text fontWeight={"bold"} fontSize={"25px"}>
        A Glimpse Into the Future
      </Text>
      <Text
        w={{ base: "90%", md: "50%", lg: "55%" }}
        m={"auto"}
        fontSize={"14px"}
      >
        Seekret's cutting- edge API observability platform leverages your
        application traffic to simplify API management, automatically detects
        breaking changes, and improves engineering velocity with context and
        automation to the API development lifecycle .
      </Text>
      <SimpleGrid
        columns={{ base: "1", md: "1", lg: "3" }}
        w={"80%"}
        m={"auto"}
        justify={"center"}
        gap={"30px"}
      >
        <Flex
          p={"20px"}
          jus
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg1} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Reliability
          </Text>
        </Flex>
        <Flex
          p={"20px"}
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg2} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Consistency
          </Text>
        </Flex>
        <Flex
          p={"20px"}
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg3} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Velocity
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default GlimpsIntoFuture