import React, { Component } from 'react';
import '../Navbar';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return <>
        <div className="container">
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
                                <Link to="/playlist"> Find Playlist </Link>
                            </li>
                        </ul>
                    </li>       
                </ul>   
            </nav>
        </div> 
        
        
        </>
    };
};

export default Navbar