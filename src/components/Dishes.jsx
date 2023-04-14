import {
    Button,
    Heading,
    Stack,
    Box,
    Container,
} from '@chakra-ui/react';


import bruscetta from '../assets/bruscetta.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import lemondessert from '../assets/lemondessert.jpg';
import CardItem from './CardItem';



export default function Dishes() {
    return (
        <Box 
          as={'section'} 
          px={{base:'8%' , md:'12%', lg: '18%'}} 
          w={'full'}>
            <Container maxW={'full'} py={16} as={Stack} spacing={12}>
                <Stack justify='space-between' align={'center'} direction={'row'} >
                    <Heading>This Week's Specials!</Heading>
                    <Button
                        rounded={'xl'}
                        w={'200px'}
                        bg={'brand.primary_Y'}
                        color={'brand.secondary_B'}
                        _hover={{
                            bg: 'brand.secondary_W',
                        }}>
                        Online Menu
                    </Button>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                    justify={'center'}
                    align={'center'}
                >
                    <CardItem
                        title={'Greek Salad'}
                        imageSrc={greeksalad}
                        price={'$12.99'}
                        description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
                    />
                    <CardItem
                        title={'Bruscetta'}
                        imageSrc={bruscetta}
                        price={'$5.99'}
                        description={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '}
                    />
                    <CardItem
                        title={'Lemon Dessert'}
                        imageSrc={lemondessert}
                        price={'$5.00'}
                        description={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    />
                </Stack>
            </Container>
        </Box>
    );
}