import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-1 col-sm-4" >
            <div className="row col-sm-12 px-0">
                <img 
                    style={{border: '1px solid black'}}
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-0" style={{color: 'white', justifyContent: 'center', marginTop: '7px', paddingBottom: '250px'}}> <h5>Song Name:</h5>
                <label htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
                <div className="row col-sm-12 px-0" style={{justifyContent: 'center'}}> <h5>Artist: </h5>
                <label htmlFor={artists[0].name} className="form-label col-sm-12">
                    {artists[0].name}
                </label>
            </div>
            </div>
            
        </div>
    );
}

export default Detail;