import { Box, Button, FormControl, Image, Input, SimpleGrid, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ContactUsImage from "../assets/contact_us.jpg";
const ContactUs = () => {
  return (
    <>
    <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>Contact With Us</Text>
      <SimpleGrid p={"2rem 4rem"} alignContent={'center'} columns={{base:"1",md:"1",lg:"2"}} gap={"20px"}>
        <Image src={ContactUsImage} />
        <Box>
          <Flex
            direction={"column"}
            justify={"space-evenly"}
            height={"80%"}
            boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
            gap={"20px"}
            p={"2rem"}
            w={{base:"100%",md:"80%",lg:"60%"}}
          >
            <Input
              background={"gray.100"}
              size={{base:"sm",md:"md",lg:"lg"}}
              type={"text"}
              placeholder="First name"
            />
            <Input
              background={"gray.100"}
              size={{base:"sm",md:"md",lg:"lg"}}
              type={"text"}
              placeholder="Last name"
            />
            <Input
              background={"gray.100"}
              size={{base:"sm",md:"md",lg:"lg"}}
              type={"text"}
              placeholder="Company name"
            />
            <Input
              background={"gray.100"}
              size={{base:"sm",md:"md",lg:"lg"}}
              type={"email"}
              placeholder="Email Addresss"
            />
            <Button
              _hover={{ background: "#ff5662" }}
              background={"#ff3744"}
              p={"30px 50px"}
              borderRadius={"40px"}
              fontSize={"20px"}
              color={"white"}
              size={{base:"sm",md:"md",lg:"lg"}}
            >
              Send me the brief!
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default ContactUs