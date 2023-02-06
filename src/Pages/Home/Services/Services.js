import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

import Service from './Service';


const Services = () => {

    const Serviceinfo = [

        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]

    return (

        <div className='gap-6 mt-8  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                Serviceinfo.map(service => <Service key={service.id} service={service} ></Service>)
            }

        </div>
    );
};

export default Services;