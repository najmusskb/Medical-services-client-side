import React from 'react';
import img from '../../../assets/icons/quote.svg'
import Winson from '../../../assets/images/people1.png'
import jack from '../../../assets/images/people2.png'
import frase from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'california',
            img: Winson,
        },
        {
            _id: 2,
            name: 'jacky',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'california',
            img: jack
        },
        {
            _id: 3,
            name: 'frase',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'california',
            img: frase
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-blod mt-5 '>Testimonial</h4>
                    <h2 className='text-4xl text-black font-blod '>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={img} alt="" />
                </figure>
            </div>

            <div className='gap-6 mt-8  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    reviews.map(revieww => <Review key={revieww._id} revieww={revieww}></Review>)
                }
            </div>
        </section>


    );
};

export default Testimonial;