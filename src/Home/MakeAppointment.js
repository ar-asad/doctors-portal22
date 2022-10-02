import React from 'react';
import doctor from '../assets/images/doctor.png'
import Button from '../Shared/Button';
import appoinment from '../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appoinment})`,
            position: 'center'
        }} className='flex justify-center items-center my-28'>
            <figure className='flex-1  hidden lg:block'>
                <img src={doctor} alt="" className='mt-[-150px]' />
            </figure>
            <div className='flex-1'>
                <h3 className='text-primary font-bold text-xl '>Appoinment</h3>
                <h2 className='text-4xl text-white'>Make an appoinment Today</h2>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default MakeAppointment;