import React from 'react';
import appointment from '../assets/images/appointment.png';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <div className='py-16' style={{
            background: `url(${appointment})`,
            position: 'center'
        }}>
            <div className='text-center mb-10'>
                <h3 className='text-primary font-bold text-xl '>Contact Us</h3>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <form className='grid grid-cols-1 gap-3 w-1/2 mx-auto'>
                <input type="email" placeholder="Email Address" class="input input-bordered w-full " />
                <input type="text" placeholder="Subject" class="input input-bordered w-full " />
                <textarea className='rounded-lg p-4' name="" id="" rows="6" placeholder='Your message'></textarea>
                <div className='text-center'>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Contact;