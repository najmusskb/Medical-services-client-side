import React from 'react';

const Review = ({ revieww }) => {
    const { name, place, img, review } = revieww
    return (
        <div className="card w-96 shadow ">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions justify-start mt-6">

                    <div className="avatar flex items-center ">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 
                        ring-offset-2">
                            <img src={img} alt='/' />

                        </div>
                    </div>
                    <div className='mx-5'>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;