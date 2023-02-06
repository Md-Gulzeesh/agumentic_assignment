import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import Plateform from "../assets/plateform.png";

const ObserPlateform = () => {
  return (
    <SimpleGrid
      columns={{ base: "1", md: "1", lg: "2" }}
      gap={"40px"}
      p={{ base: "1rem", md: "2rem", lg: "5rem 14rem" }}
    >
      <Flex direction={"column"} gap={"20px"}>
        <Text w={"90%"} fontWeight={"bold"} fontSize={"25px"}>
          The Seekret API Observability Platform
        </Text>
        <Text fontSize={"16px"} color={"gray.600"}>
          The ultimate foundation for managing and maintaining APIs as they
          advance through the SDLC and beyond .
        </Text>
        <Flex>
          <Flex
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            textAlign={"center"}
            p={"20px"}
            gap={"10px"}
            borderRadius={"10px"}
            direction={"column"}
          >
            <Text fontWeight={"bold"} fontSize={"20px"}>
              3x
            </Text>
            <Text>Better Coverage</Text>
          </Flex>
          <Flex
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            textAlign={"center"}
            p={"20px"}
            gap={"10px"}
            borderRadius={"10px"}
            direction={"column"}
          >
            <Text fontWeight={"bold"} fontSize={"20px"}>
              Iterate APIs
            </Text>
            <Text>5x faster</Text>
          </Flex>
          <Flex
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            textAlign={"center"}
            p={"20px"}
            gap={"10px"}
            borderRadius={"10px"}
            direction={"column"}
          >
            <Text fontWeight={"bold"} fontSize={"20px"}>
              100%
            </Text>
            <Text>Compatiblity</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Image width={"100%"} src={Plateform} />
      </Box>
    </SimpleGrid>
  );
}

export default ObserPlateform