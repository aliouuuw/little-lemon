import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import Navbar from '../components/Navbar';
import InfoCard from '../components/InfoCard';

function ConfirmedBooking() {

    const { toastOn, setToastOn } = useAlertContext()
    const toast = useToast();
    

    useEffect(() => {
        if (toastOn) {
            toast({
                title: 'Booking successful!',
                position: 'top',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        }
        else setToastOn(true);
        // eslint-disable-next-line
    }, [toastOn]);
    return (
        <>
            <Navbar />
            <InfoCard />
        </>
    )
}

export default ConfirmedBooking
