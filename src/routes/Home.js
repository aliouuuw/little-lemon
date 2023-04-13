import { VStack, } from '@chakra-ui/react';
import React from 'react'
import HeroSection from '../components/HeroSection';
import Dishes from '../components/Dishes';

function Home() {
  return (
    <VStack as={'main'} w='full'>
      <HeroSection />
      <Dishes />
    </VStack>
  )
}

export default Home;
