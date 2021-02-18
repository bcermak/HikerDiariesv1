import React from 'react'
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';
import Footer from '../components/Footer';

const NewPost = () => {
    return (
        <div className="container">
            <Navbar />
            <PostForm /> 
            <Footer /> 
        </div>
    );
};

export default NewPost
