import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
/* import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

import { AlertProvider } from "./context/alertContext"; */


function App() {
  return (
    <ChakraProvider>
      <h1>Hello Little Lemon</h1>
    </ChakraProvider>
  );
}

export default App;
