import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/Rabi/images/instantvideoconsult.jpg";
import b from "../../Pages/Rabi/images/geyser.jpg";
import c from "../../Pages/Rabi/images/waterpurifier.jpg";
import d from "../../Pages/Rabi/images/airpurifier.jpg";

const Appliances = () => {
  return (
    <Box height="550px">
      <h1 style={{ fontSize: "50px" }}>Appliances</h1>
      <Flex mt="100px" ml="180px" gap="50px">
        <Box>
          <img
            style={{ height: "200px" }}
            width="350px"
            alt="Big Home Rush"
            src={a}
          ></img>
          <p>Expert Counselling</p>
          <p>Advanced Skin Treatments</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={b}
          ></img>
          <p>Furniture Making, Upholstery & Polish</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={c}
          ></img>
          <p>Air Purifier</p>
          <p>Flat ₹100 off</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={d}
          ></img>
          <p style={{textAlign:"center"}}>Buy RO Water Purifier</p>
        </Box>
      </Flex>
    </Box>
  )
}

export default Appliances