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


export default function HeroSection({bgColor, titleColor , textColor, showbtn, heroText, heroimg}) {
  return (
    <Stack 
      as={'section'} 
      bgColor={bgColor} 
      h={{ md: '60vh'}} 
      direction={{ md: 'row' }} 

      w={'full'}
      px={{base:'8%' , md:'12%', lg: '18%'}} >
      <Flex h={{base: '50%', md: '100%'}} py={10} flex={1} align={'center'} justify={{base: 'center', md: 'start'}} mx={'4'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={titleColor}
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
            <Text color={textColor} as={'span'} fontSize={'3xl'} fontWeight={'400'}>
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
                bg: 'brand.secondary_W',
              }}>
              Reserve a Table
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex h={{base: '50%', md: '100%'}} flex={1} justify={{base: 'center', md: 'end'}} py='10' paddingEnd={'4'}>
        <Image
          alt={'Restaurant Image'}
          objectFit={'cover'}
          rounded={'xl'}
          src={heroimg}
          w={'sm'}
          h={{base:'xs', md: 'auto'}}
        />
      </Flex>
    </Stack>
  );
}