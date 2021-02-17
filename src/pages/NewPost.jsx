import React from 'react'
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';

const NewPost = () => {
    return (
        <div className="container">
            <Navbar />
            <PostForm />  
        </div>
    );
};

export default NewPost
