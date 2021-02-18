import React, { useEffect, useState} from 'react';
import { Credentials } from '../components/Spotify/Credentials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spotify from '../components/Spotify';
import axios from 'axios';

const BuildPlaylist = () => {

    const spotify = Credentials();

    console.log('RENDERING APP.JS');

    const data = [
        {value: 1, name: 'A'},
        {value: 2, name: 'B'},
        {value: 3, name: 'C'},

    ];

    // {selectedGenre: '', listOfGenresFromAPI: []}

    const [token, setToken] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        axios('https://accounts.spotify.com/api/token', {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
          },
          data: 'grant_type=client_credentials',
          method: 'POST'
        })
        .then(tokenResponse => {      
          setToken(tokenResponse.data.access_token);    
          
          axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
            })
            .then (genreResponse => {
                setGenres(genreResponse.data.categories.items);
            });

        });
    
      }, []); 

    return (
        <div className="container">
            <Navbar />
            <div className="spotifyList">
                <div className="row">
                    <div className="col-md-12">
                        <h1> Create Playlist </h1>
                        <form onSubmit={() => {}}>
                            <div className="container">
                                <Spotify options={genres} />
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