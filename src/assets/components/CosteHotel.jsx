import React from 'react'
import { VStack, Heading, Text } from "@chakra-ui/react";
const CosteHotel = ({ night }) => {

    const costeDia = 140;
    const costeTotal = costeDia * night;

  return (
    <VStack>
      <Text>
              El coste de su estadia por {night} noches es:
      </Text>
              <Text color='red'>{costeTotal}</Text>
    </VStack>
  );
}

export default CosteHotel
