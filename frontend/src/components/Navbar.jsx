import { Box, Button, Flex, Heading, Input, Link } from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Flex justify={"space-between"} p={{base:"1rem",md:"1rem",lg:"2rem"}} className="nav">
      <Box>
        <Heading as="h1">SEEKRET</Heading>
      </Box>
      <Input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">About Us</Link>
        </li>
        <li>
          <Link to="/timeline">How It Works</Link>
        </li>
        <li>
          <Button
            background={
              "linear-gradient(90deg, rgba(252,117,37,1) 0%, rgba(255,55,68,1) 45%)"
            }
            _hover={{
              background:
                "linear-gradient(90deg, rgba(255,55,68,1) 42%, rgba(252,117,37,1) 100%)",
            }}
            color={"whitesmoke"}
            size="lg"
          >
            Download Our Brief
          </Button>
        </li>
      </ul>
    </Flex>
  );
};
export default Navbar;
