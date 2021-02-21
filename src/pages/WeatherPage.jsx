import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const WeatherPage = () => {
    return (
        <div className="container">
            <Navbar />
            <h1 style={{fontFamily: 'Reggae One, cursive'}}> Import Weather </h1> 
            <Footer />
        </div>
    );
};

export default WeatherPage
