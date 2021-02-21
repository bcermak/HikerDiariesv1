import React from 'react';
import { Link } from 'react-router-dom';


const PostForm = () => {
    
    return (
        <div className="container">
            <h1 id="howitwas"> How was the hike? </h1>
            <div className="row">
                <div className="postForm col-md-12">
                    <form className="form-input">
                        <div className="form-input">
                            <input
                                required
                                type = "text"
                                name = "trail-name"
                                placeholder = "Trail Name"
                                
                                />
                        </div>
                        <div className="form-input">
                            <input
                                required
                                type = "number"
                                name = "distance"
                                placeholder = "Hike Length"
                                />
                        </div>
                        <div className="form-input">
                                    <textarea 
                                    required 
                                    name="body" 
                                    placeholder="Trail Notes?" 
                                    cols="30" row="10"  
                                    ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                                <Link to="/" className="btn btn-secondary">Cancel</Link>                      
                    </form>
                </div>    
            </div>
        </div>
    )
}

export default PostForm
