import React, { Component } from 'react';
import '../Navbar'

class Navbar extends React.Component {
    render() {
        return <>
            <nav>
        <p>Hiker Diaries</p>
        <ul>
            <li><a href="index.html"> Home </a></li>
            <li><a href="#posts"> Post </a>
                <ul>
                    <li><a href="./public/pages/posts/create.html"> Create New </a></li>
                    <li><a href="./public/pages/posts/view.html"> View History </a></li>
                </ul>
            </li>
            <li><a href="#"> Plan </a>
                <ul>
                    <li><a href="./public/pages/plan/weather.html"> Check Weather </a></li>
                    <li><a href="./public/pages/plan/playlist.html"> Build Playlist </a></li>
                </ul>
            </li>       
        </ul>
    </nav>
        
        
        
        </>
    };
};

export default Navbar