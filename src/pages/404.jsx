import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="lostBud">
            <h2> You're a little lost, bud. </h2>
            <Link to="/"><p style={{color: 'rebeccapurple'}}> Back to the trail, bud. </p></Link>
        </div>
    )
}

export default NotFoundPage
