import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mx-12'>
            <h1 className='text-center mt-4 text-purple-950 text-5xl bg-purple-300 font-bold p-3'>Awesome Affordable Prices</h1>
           <div className='grid md:grid-cols-3 gap-3'>
           {
                prices.map(price => <PriceCard
                    key={price.id}
                    price={price}
                ></PriceCard>)

            }
           </div>

        </div>
    );
};

export default PriceList;