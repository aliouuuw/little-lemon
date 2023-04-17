import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { ChakraProvider, extendTheme , Box, VStack} from '@chakra-ui/react';

import Home from './routes/Home';
import Reserve from './routes/Reserve';
import ConfirmedBooking from './routes/ConfirmedBooking';
import { AlertProvider } from './context/alertContext';


const colors = {
  brand:{
    primary_Y : '#F4CE14',
    primary_G : '#495E57',
    secondary_S: '#EE9972',
    secondary_W : '#EDEFEE',
    secondary_B : '#333333'
  }
};

const fonts = {
  body: 'Karla',
  heading: 'Markazi Text',
}

const theme = extendTheme({colors, fonts})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/little-lemon" element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path="/little-lemon/reserve" element={<Reserve/>}/>
      <Route path="/little-lemon/confirmation" element={<ConfirmedBooking/>}/>
    </Route>
  )
);

function Root(){
  return(
    <Box bgColor="brand.secondary_W">
      <VStack>
        <Outlet />
      </VStack>
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
