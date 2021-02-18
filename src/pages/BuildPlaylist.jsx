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
            <div classname="spotifyList">
                <div className="row">
                    <div className="col-md-12">
                        <h1> Create Playlist </h1>
                        <form onSubmit={() => {}}>
                            <div className="container">
                                <Spotify options={data} />
                                <Spotify options={data} />
                                <button type="submit" className="btn btn-secondary">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>        
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BuildPlaylist