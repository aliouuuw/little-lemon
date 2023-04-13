import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { ChakraProvider, extendTheme , Box, VStack} from '@chakra-ui/react';

import Home from './routes/Home';
import Reserve from './routes/Reserve';
import Navbar from './components/Navbar';

/* import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

import { AlertProvider } from "./context/alertContext"; */

const colors = {
  brand:{
    primary_Y : '#F4CE14',
    primary_G : '#495E57',
    secondary_W : '#EDEFEE',
    secondary_B : '#333333'
  }
};

const fonts = {
  body: 'Inter',
  heading: 'Roboto',
}

const theme = extendTheme({colors, fonts})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="reserve" element={<Reserve/>}/>
    </Route>
  )
);

function Root(){
  return(
    <Box bgColor="brand.secondary_W">
      <Navbar/>
      <VStack>
        <Outlet />
      </VStack>
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
