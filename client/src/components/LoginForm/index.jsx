import React, { Component } from 'react';

class LoginForm extends React.Component {
    render() {
        const boxStyle = {
            height: '190px',
            width: '500px',
            backgroundColor: '#222',
            borderStyle:'inset',
            borderColor: 'magenta',
            opacity:'93%',
            color: 'white',
                    
        }
        const mainDivStyle = {
            textAlign: 'center',
            height: '180px',
            width: '500px',
            marginTop: '195px',
        } 

        const btnStyle = {
            display: 'block',
            margin: '0 auto',
            marginTop: '18px',
            marginBottom: '18px',
            backgroundColor: 'rgb(85, 0, 141)',
            color: '#cb7eff'
        }

        const inputStyle = {
            marginLeft: '5px',
            textAlign: 'center'
        }

        const message = function() {
            alert("Thanks for visiting. More coming soon!")
        }

        return <>
        <div className="container" style={mainDivStyle}>
            <div className="row">
                <div className="col-md-12" style={boxStyle}>
                    <form>
                        <h4 style={{marginTop:'25px', marginBottom: '25px'}}> Enter Login Information </h4>
                        <input style={inputStyle} type="text" placeholder="Username" name="username" required></input>
                        <input style={inputStyle} type="password" placeholder="Password" name="password" required></input>
                        <button className="btn" style={btnStyle} onClick={message}>Log-In</button>
                    </form>
                </div>
            </div>
        </div>           
        </>
    };
};

export default LoginForm