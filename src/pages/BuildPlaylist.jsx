import React, { useEffect, useState} from 'react';
import { Credentials } from '../components/Spotify/Credentials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spotify from '../components/Spotify';
import Listbox from '../components/Spotify/Listbox';
// import Detail from '../components/Spotify/Detail';
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
    const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    const [trackDetail, setTrackDetail] = useState(null);

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
                setGenres({
                    selectedGenre: genres.selectedGenre,
                    listOfGenresFromAPI: genreResponse.data.categories.items
                });
            });

        });
    
      },  [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 

      const genreChanged = val => {
        setGenres({
          selectedGenre: val, 
          listOfGenresFromAPI: genres.listOfGenresFromAPI
        });

        axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
            })
            .then(playlistResponse => {
            setPlaylist({
                selectedPlaylist: playlist.selectedPlaylist,
                listOfPlaylistFromAPI: playlistResponse.data.playlists.items
            })
        });

    console.log(val)
    }

    const playlistChanged = val => {
        setPlaylist({
          selectedPlaylist: val,
          listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
        });
      }

      const buttonClicked = e => {
        e.preventDefault();
    
        axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
          method: 'GET',
          headers: {
            'Authorization' : 'Bearer ' + token
          }
        })
        .then(tracksResponse => {
          setTracks({
            selectedTrack: tracks.selectedTrack,
            listOfTracksFromAPI: tracksResponse.data.items
          })
        });
      }

      const listboxClicked = val => {

        const currentTracks = [...tracks.listOfTracksFromAPI];
    
        const trackInfo = currentTracks.filter(t => t.track.id === val);
    
        setTrackDetail(trackInfo[0].track);
    
    
    
      }

    return (
        <div className="container">
            <Navbar />
            <div className="spotifyList">
                <div className="row">
                    <div className="col-md-12">
                        <h1> Create Playlist </h1>
                        <form onSubmit={buttonClicked}>
                            <div className="container">
                                <Spotify options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged}/>
                                <Spotify options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
                                <button type="submit" className="btn btn-secondary">
                                    Search
                                </button>
                                <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
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