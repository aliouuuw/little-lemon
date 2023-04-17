import React from 'react'
import Navbar from '../components/Navbar';
import MultiSteps from '../components/MultiSteps';
import { useNavigate } from "react-router-dom";


function Reserve() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <MultiSteps navigate={navigate}/>
    </>
  )
}

export default Reserve;
