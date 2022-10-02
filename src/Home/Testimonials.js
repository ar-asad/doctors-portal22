import React from 'react';
import qoute from '../assets/icons/quote.svg';
import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'california',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            country: 'california',
            img: people3
        }
    ]
    return (
        <div className='pb-28'>
            <div className='flex justify-between gap-5'>
                <div>
                    <h3 className='text-primary font-bold text-xl '>Treatment</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={qoute} alt="" className='w-28 lg:w-48' />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
        </div>
    );
};

export default Testimonials;