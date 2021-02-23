import React, { Component } from 'react';
import '../Footer'

class Footer extends React.Component {
    render() {
        const footerStyle = {
            position: "fixed",
            left: "0",
            bottom: '0',
            width: '100%',
            backgroundColor: '#2e1534',
            color: '#f3f3f3',
            textAlign: 'center',
            height: '40px',
            borderStyle: 'inset',
            borderColor: 'rgb(148, 2, 245)',
            borderBottomStyle: 'none'

        }

        return <>
            <footer style={footerStyle}>
            <p style={{lineHeight:"40px"}}>Copyright 2021 &copy;</p>
            </footer>   
        </>
    };
};

export default Footer