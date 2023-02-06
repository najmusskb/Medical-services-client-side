import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;

    return (
        <div className={`card px-6 lg:card-side ${bgClass} shadow-xl`}>
            <figure><img className='' src={icon} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;