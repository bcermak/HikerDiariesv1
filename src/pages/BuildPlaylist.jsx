import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spotify from '../components/Spotify';

const BuildPlaylist = () => {

    const data = [
        {value: 1, name: 'A'},
        {value: 2, name: 'B'},
        {value: 3, name: 'C'},

    ]

    return (
        <div className="container">
            <Navbar />
            <h1> Create Playlist </h1>
            <Spotify options={data} />
            <Spotify options={data} />
            <Footer />
        </div>
    );
};

export default BuildPlaylist