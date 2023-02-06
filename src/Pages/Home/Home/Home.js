import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointmenr/MakeAppointment';
import FlexServices from '../Services/FlexServices';
import Services from '../Services/Services';
import ServicesHeader from '../Services/ServicesHeader';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServicesHeader></ServicesHeader>
            <Services></Services>
            <FlexServices></FlexServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>


        </div>
    );
};

export default Home;