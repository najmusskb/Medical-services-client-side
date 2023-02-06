import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-gray-500'
        },
        {
            id: 2,
            name: 'Opening Hours',
            description: 'open 9.00 am to 5.00 pm everyday',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-cyan-500'
        },
        {
            id: 3,
            name: 'Opening Hours',
            description: 'open 9.00 am to 5.00 pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-yellow-500'
        }
    ]


    return (
        <div className='gap-6 mt-8 text-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;