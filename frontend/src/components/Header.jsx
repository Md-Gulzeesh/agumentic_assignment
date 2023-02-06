import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react';
import "./Header.css";
import AnalyticsImage from "../assets/analytics.png";

const Header = () => {
  return (
    <Box mt={{base:"3.5rem",md:"4rem",lg:"7rem"}} className="header_section">
      <Text textAlign={"center"} fontSize={"40px"}>Mission Control for Your APIs</Text>
      <Text textAlign={"center"} color={"gray.400"} w={"62%"}>
        Seekret's cutting- edge API observability platform provides developers
        and engineering managers with the insights and resources needed to
        build, test, and publish APIs faster than ever before .
      </Text>
      <Box>
        <Button
          background={
            "linear-gradient(90deg, rgba(252,117,37,1) 0%, rgba(255,55,68,1) 45%)"
          }
          color={"whitesmoke"}
          size={"lg"}
          _hover={{
            background:
              "linear-gradient(90deg, rgba(255,55,68,1) 42%, rgba(252,117,37,1) 100%)",
          }}
        >
          Download Our Brief
        </Button>
      </Box>
      <Image borderRadius={"10px"} src={AnalyticsImage} w={"50%"} />
    </Box>
  );
}

export default Header