import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import ApiImg1 from "../assets/api_img1.png";
import ApiImg2 from "../assets/api_img2.png";
import ApiImg3 from "../assets/api_img3.png";

const ApiDevelopmentSection = () => {
  return (
    <Flex gap={"20px"} direction={"column"} textAlign={"center"} p={"5rem 0"}>
      <Text fontWeight={"bold"} fontSize={"25px"}>
        API development today takes place in the dark
      </Text>
      <Text w={{base:"90%",md:"50%",lg:"55%"}} m={"auto"} fontSize={"14px"}>
        As the API- first approach to modern software continues to gain
        popularity and momentum, developers worldwide struggle to understand the
        impact of an API change on application behavior .
      </Text>
      <SimpleGrid
        w={"80%"}
        m={"auto"}
        columns={{base:"1",md:"1",lg:"3"}}
        justify={"center"}
        gap={"30px"}
      >
        <Flex
          p={"20px"}
          jus
          boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
          borderRadius={"10px"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg1} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Too many moving parts
          </Text>
          <Text textAlign={"center"} w={"75%"} fontSize={"14px"}>
            Understanding complex API interactions is difficult
          </Text>
        </Flex>
        <Flex
          p={"20px"}
          boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
          borderRadius={"10px"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg2} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Diminishing commitment to testing
          </Text>
          <Text textAlign={"center"} w={"75%"} fontSize={"14px"}>
            Testing cannot be solely used for ensuring reliability
          </Text>
        </Flex>
        <Flex
          p={"20px"}
          boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
          gap={"10px"}
          direction={"column"}
          align={"center"}
          justify={"space-between"}
          borderRadius={"10px"}
        >
          <Image h={"80%"} w={"100%"} src={ApiImg3} />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Change = Chaos
          </Text>
          <Text textAlign={"center"} w={"75%"} fontSize={"14px"}>
            Not knowing the impact of a change to production brings chaos
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default ApiDevelopmentSection