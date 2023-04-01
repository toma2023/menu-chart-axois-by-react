import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-600 text-5xl font-extrabold'> {price.price}</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
               </h2>
           <p className='my-6 text-2xl text-center font-bold'> {price.name}</p> 
           <p className='underline font-bold text-white'>Features: </p>
           {
            price.features.map((feature, idx)=><Feature
            key={idx}
            feature={feature}
            ></Feature>)
           }
           <button className='w-full hover:bg-green-700 mt-auto bg-green-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;