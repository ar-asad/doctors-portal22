import React from 'react';

const Reviews = ({ review }) => {
    const { description, name, country, img } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{description}</p>
                <div className='flex items-center'>
                    <div class="avatar mr-5">
                        <div class="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;