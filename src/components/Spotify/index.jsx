import React, { useState } from 'react';

const Spotify = (props) => {

    const [selectedValue, setSelectedValue] = useState('');

    return (
        <div>
            <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                {props.options.map((item, idx) => <option key={idx} value={item.value}>{item.name}</option>)}
            </select>
            <p>{ selectedValue }</p>
        </div>
    );
};

export default Spotify
