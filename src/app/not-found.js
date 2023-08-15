import Image from 'next/image';
import React from 'react';

const notFound = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-center my-24'>
            <Image width={500} height={500} src="https://i.ibb.co/FxFVL1T/243627-P43-QII-478.jpg" alt='404 image'/>
        </div>
            // <h1>This is not found | 404 ERROR</h1>
    );
};

export default notFound;