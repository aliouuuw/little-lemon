import { Heading, HStack, Image, Text, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardItem = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card borderRadius='10px'>
      <Image src={imageSrc} borderRadius='10px'/>
      <CardBody>
        <Heading as='h6' size='md'>{title}</Heading>
        <Text mt='15px' align='justify'>{description}</Text>
      </CardBody>
      <CardFooter>
        <HStack>
          <Heading as='h6' size='sm'>See more </Heading>
          <FontAwesomeIcon icon={faArrowRight} size='sm' style={{paddingTop:'5px'}}/>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
