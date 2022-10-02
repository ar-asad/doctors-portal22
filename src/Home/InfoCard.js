import React from 'react';

const InfoCard = ({ img, bgColor }) => {
    return (
        <div class={`card lg:card-side text-white shadow-xl ${bgColor}`}>
            <figure className='pl-3'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;