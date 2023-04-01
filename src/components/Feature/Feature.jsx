import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex mt-2 items-center'>
            <CheckCircleIcon className="h-4 w-4 text-purple-600" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;