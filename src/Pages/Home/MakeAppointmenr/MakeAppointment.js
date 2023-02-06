import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import backgroundImg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimarryButton/PrimaryButton';

const MakeAppointment = () => {

    return (

        <section className='mt-16' style={{
            background: `url(${backgroundImg})`
        }}>

            <div className="hero ">
                <div className="cover hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='/' className="-mt-32 hidden md:block lg:block lg:w-1/2  rounded-lg shadow-2xl" />
                    <div className='text-white'>
                        <h3 className="text-primary text-1xl font-bold">Appointment</h3>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable cont  ent of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <PrimaryButton>Make Apointment</PrimaryButton>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;