import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const WeatherPage = () => {
    return (
        <div className="container">
            <Navbar />
            <div className='row'>
                <div className="col-md-12" style={{textAlign: 'center', padding: '33px'}}>
                    <input type="text" placeholder='city name'/>
                    <button style={{backgroundColor: 'rebeccapurple', marginLeft: '10px', padding:'4px'}}> Search Weather </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
            <Footer />
        </div>
    );
};

export default WeatherPage
