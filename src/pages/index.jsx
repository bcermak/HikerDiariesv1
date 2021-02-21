import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm'
// import LoginForm from '../components/LoginForm';

const mainPage = () => {

    return (
        <div className='container'>
        <Navbar/>
        <LoginForm/>
        <Footer />
      </div>
    );
};

export default mainPage;

