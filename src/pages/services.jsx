import React from 'react';
import About from './about';

const Services = () => {
    const services = [
        'Service 1',
        'Service 2',
        'Service 3',
        // Add more services here
    ];

    return (
        <div>
            <div className='bg-black h-auto text-white flex items-center justify-center text-2xl'>
            <h1>All Services We Provide</h1>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            </div>
        </div>
        
    );
};

export default Services;