import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";


const Footer = () => {
  return (
    <Flex
      gap={"20px"}
      background={"#171c28"}
      borderRadius={"0 80px 0 0"}
      textAlign={"center"}
      direction={"column"}
    >
      <Text fontSize={"48px"} color={"#ff3744"}>
        SEEKRET
      </Text>
      <Flex gap={"50px"} justify={"center"}>
        <Link href="#">
          <FaFacebookF
            style={{ fontSize: "45px", color: "#ff3744", cursor: "pointer" }}
          />
        </Link>
        <Link href="#">
          <FaTwitter
            style={{ fontSize: "45px", color: "#ff3744", cursor: "pointer" }}
          />
        </Link>
        <Link href="#">
          <FaInstagram
            style={{ fontSize: "45px", color: "#ff3744", cursor: "pointer" }}
          />
        </Link>
        <Link href='#'>
          <FaLinkedin
            style={{ fontSize: "45px", color: "#ff3744", cursor: "pointer" }}
          />
        </Link>
      </Flex>
      <hr style={{ width: "80%", margin: "auto", borderColor: "#303042" }} />
      <Text
        fontSize={{ base: "16px", md: "17px", lg: "18px" }}
        color={"gray.400"}
      >
        © Copyright 2021 SEEKRET All Rights Reserved
      </Text>
    </Flex>
  );
}

export default Footer