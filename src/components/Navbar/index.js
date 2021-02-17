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
                    <li><a href="/newpost"> Create New </a></li>
                </ul>
            </li>
            <li><a href="#"> Plan </a>
                <ul>
                    <li><a href="/weather"> Check Weather </a></li>
                    <li><a href="/playlist"> Build Playlist </a></li>
                </ul>
            </li>       
        </ul>
    </nav>
        
        
        
        </>
    };
};

export default Navbar