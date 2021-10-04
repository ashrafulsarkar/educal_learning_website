import React from 'react';
import AboutUs from '../Sections/AboutUs/AboutUs';
import Hero from '../Sections/Hero/Hero';
import Service from '../Sections/Service/Service';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Service></Service>
        </main>
    );
};

export default Home;