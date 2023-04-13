import {
    ButtonGroup,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    Card,
    CardBody,
    CardFooter,
    Box,
    Container,
} from '@chakra-ui/react';


import bruscetta from '../assets/bruscetta.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import lemondessert from '../assets/lemondessert.jpg';



export default function Dishes() {
    return (
        <Box>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Our Clients Speak</Heading>
                    <Text>We have been working with clients around the world</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Card w="30vw">
                        <CardBody>
                            <Image
                                src={greeksalad}
                                alt='Greek salad'
                                borderRadius='lg'
                                objectFit={'cover'}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>


                    <Card w="30vw">
                        <CardBody>
                            <Image
                                src={bruscetta}
                                alt='Bruscetta'
                                borderRadius='lg'
                                objectFit={'cover'}
                                w='md'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    <Card w="30vw">
                        <CardBody>
                            <Image
                                src={lemondessert}
                                alt='Lemon Dessert'
                                borderRadius='lg'
                                objectFit={'cover'}
                                w='md'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Stack>
            </Container>
        </Box>
    );
}