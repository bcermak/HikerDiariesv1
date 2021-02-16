import React, { Component } from 'react';
import '../Footer'

class Footer extends React.Component {
    render() {
        const footerStyle = {
                position: "fixed",
                left: "0",
                bottom: '0',
                width: '100%',
                backgroundColor: '#222',
                color: '#f3f3f3',
                textAlign: 'center'
        }

        return <>
        
            <footer style={footerStyle}>
            Copyright 2021 &copy;
            </footer>
        
        
        </>
    };
};

export default Footer