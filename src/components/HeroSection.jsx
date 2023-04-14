import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';


export default function HeroSection({bgColor, textColor, showbtn, heroText, heroimg}) {
  return (
    <Stack as={'section'} bgColor={bgColor} h={{base: '100vh', md: '60vh'}} direction={{ base: 'column', md: 'row' }} px={{base:'10%' , md:'15%', lg: '25%'}}>
      <Flex h={{base: '50%', md: '100%'}} py={10} flex={1} align={'center'} justify={{base: 'center', md: 'start'}}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'brand.primary_Y'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Little Lemon
            </Text>
            <br />
            <Text color={textColor} as={'span'} fontSize={'3xl'}>
              Chicago
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={textColor}>
            {heroText}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to="reserve">
            <Button
              display={showbtn}
              rounded={'xl'}
              bg={'brand.primary_Y'}
              color={'brand.secondary_B'}
              _hover={{
                bg: 'blue.500',
              }}>
              Reserve a Table
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex h={{base: '50%', md: '100%'}} flex={1} justify={{base: 'center', md: 'end'}} py='10'>
        <Image
          alt={'Restaurant Image'}
          objectFit={'cover'}
          rounded={'xl'}
          src={heroimg}
        />
      </Flex>
    </Stack>
  );
}