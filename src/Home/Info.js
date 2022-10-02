import React from 'react';
import clock from '../assets/icons/clock.svg';
import location from '../assets/icons/marker.svg';
import contact from '../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8'>
            <InfoCard img={clock} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard img={location} bgColor='bg-neutral'></InfoCard>
            <InfoCard img={contact} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div >
    );
};

export default Info;