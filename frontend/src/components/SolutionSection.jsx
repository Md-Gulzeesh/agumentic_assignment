import { Box, Flex, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import SheepImage from "../assets/sheep_image.png";
import SolutionIcon1 from "../assets/solution_icon1.png";
import SolutionIcon2 from "../assets/solution_icon2.png";
import SolutionIcon3 from "../assets/solution_icon3.png";
import SolutionIcon4 from "../assets/solution_icon4.png";

const SolutionSection = () => {
  return (
    <Flex direction={{base:"column-reverse",md:"column",lg:"row"}} justify={"space-between"} p={"1rem"}>
      <Image w={"100%"} src={SheepImage} />
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        gap={"40px"}
      >
        <Text textAlign={"center"} w={{base:"100%",md:"90%",lg:"70%"}} fontSize={"30px"} fontWeight={"bold"}>
          In this solution brief, we share how Seekret is tackling API
          management and how your R& D teams can :
        </Text>
        <SimpleGrid w={{base:"100%",md:"80%",lg:"60%"}} gap={"40px"} columns={2}>
          <Flex
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            borderRadius={"5px"}
            p={"5px"}
            direction={"column"}
            align={"center"}
          >
            <Image position={"relative"} top={"-10"} w={"100px"} src={SolutionIcon1} />
            <Text fontSize={"14.5px"} textAlign={"center"}>
              Manage the constant flow of API changes that take place in your
              CI/ CD pipeline
            </Text>
          </Flex>
          <Flex
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            borderRadius={"5px"}
            p={"5px"}
            direction={"column"}
            align={"center"}
          >
            <Image position={"relative"} top={"-10"} w={"100px"} src={SolutionIcon2} />
            <Text fontSize={"14.5px"} textAlign={"center"}>
              Gain observability into your application's behavior
            </Text>
          </Flex>
          <Flex
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            borderRadius={"5px"}
            p={"5px"}
            direction={"column"}
            align={"center"}
          >
            <Image position={"relative"} top={"-10"} w={"100px"} src={SolutionIcon3} />
            <Text fontSize={"14.5px"} textAlign={"center"}>
              Streamline testing and documentation efforts .
            </Text>
          </Flex>
          <Flex
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            borderRadius={"5px"}
            p={"5px"}
            direction={"column"}
            align={"center"}
          >
            <Image position={"relative"} top={"-10"} w={"100px"} src={SolutionIcon4} />
            <Text fontSize={"14.5px"} textAlign={"center"}>
              Ensure your application's quality is at pace with development
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default SolutionSection