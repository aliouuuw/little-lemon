import { VStack } from '@chakra-ui/react';
import React from 'react'
import HeroSection from '../components/HeroSection';
import Dishes from '../components/Dishes';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


import heroimgtop from '../assets/heroimgtop.jpg';
import heroimgbtm from '../assets/heroimgbtm.jpg';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <Navbar />
    <VStack as={'main'} w='full'>
      <HeroSection 
        bgColor='brand.primary_G' 
        titleColor='brand.primary_Y'
        textColor='brand.secondary_W'
        showbtn={'box'}
        heroText={'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'}
        heroimg={heroimgtop}
        />
      <Dishes />
      <Testimonials />
      <HeroSection 
        bgColor='brand.secondary_W' 
        titleColor={'brand.primary_G'}
        textColor='brand.secondary_B' 
        showbtn={'none'}
        heroText={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quidem quia? Repudiandae aliquid consectetur aperiam deleniti quam eveniet totam quibusdam?'}
        heroimg={heroimgbtm}
        />
      <Footer />
    </VStack>
    </>
  )
}

export default Home;
