import { Heading, HStack, Image, Text, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CardItem = ({ title, description, imageSrc, price }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card rounded={'3xl'} boxShadow='dark-lg' w={{base: '275px', md:'45vw'}} h={{base: 'md', md:'400px', lg:'md'}}>

      <Image src={imageSrc} borderTopRadius={'3xl'} h={'30%'} objectFit={'cover'}/>

      <CardBody>
        <HStack justify={'space-between'}>
          <Heading as='h6' size='md'>{title}</Heading>
          <Text color={'brand.secondary_S'}>{price}</Text>
        </HStack>
        <Text mt={'3'} fontSize={{base: 'md', md: 'small', lg: 'sm'}}>{description}</Text>
      </CardBody>

      <CardFooter>
        <HStack>
          <Heading as='h6' size='sm'>Order delivery </Heading>
          <FontAwesomeIcon icon={faArrowRight} size='sm' style={{paddingTop:'5px'}}/>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
