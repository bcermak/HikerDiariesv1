import React, { Component } from 'react';
import '../Navbar';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return <>
            <nav>
        <p>Hiker Diaries</p>
        <ul>
            <li>
                <Link to="/"> Home </Link>
                </li>
            <li><a> Post </a>
                <ul>
                    <li>
                        <Link to="/newpost"> Create New </Link>
                    </li>
                </ul>
            </li>
            <li><a> Plan </a>
                <ul>
                    <li>
                        <Link to="/weather"> Check Weather</Link>
                    </li>
                    <li>
                        <Link to="/playlist"> Build Playlist </Link>
                    </li>
                </ul>
            </li>       
        </ul>
    </nav>
        
        
        
        </>
    };
};

export default Navbar