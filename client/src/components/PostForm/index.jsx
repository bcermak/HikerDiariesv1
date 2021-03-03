import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";





class PostForm extends React.Component {

    state = {
        title:'',
        body: '',
        miles: '',
        posts: []
    };
    
    componentDidMount = () => {
        this.getBlogPost();
        }
        
        getBlogPost = () => {
        axios.get('/api')
          .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
        }
        
        handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
        };
        
        submit = (event) => {
        event.preventDefault();
        
        const payload = {
            title: this.state.title,
            miles: this.state.miles,
            body: this.state.body
            
        };
        
        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
        })
        .catch(() => {
            console.log('Internal Server Error!');
        })
        }
        
        resetUserInputs = () => {
        this.setState({
            title: '',
            body: ''
        })
        };
        
        displayPost = (posts) => {
          if (!posts.length) return null;
        
          return posts.map((post, index) => (
            <div className='postHolder' key={index}>
                <h3> {post.title}</h3>
                <p> Distance: {post.miles} Miles </p>
                <p>  Trail Notes: {post.body}</p>
            </div>
        
        
        ));
        
        };

        render() {
            console.log('State:', this.state)
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
                                        name = "title"
                                        placeholder = "Trail Name"
                                        value={this.state.title}
                                            onChange={this.handleChange} 
                                        />
                                </div>
                                <div className="form-input">
                                    <input
                                        required
                                        type = "text"
                                        name = "miles"
                                        placeholder = "Miles"
                                        value={this.state.miles}
                                            onChange={this.handleChange}  
                                        />
                                </div>
                                <div className="form-input">
                                            <textarea 
                                            required 
                                            name="body" 
                                            placeholder="Trail Notes?" 
                                            cols="30" row="10"
                                            value={this.state.body}
                                            onChange={this.handleChange}  
                                            ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                                        <Link to="/" className="btn btn-secondary">Cancel</Link>                      
                            </form>
                        </div>    
                    </div>
        
                    <div className="row">
                                <div className="col-md-12 allPosts">
                                    <div className="blog-">
                                        {this.displayPost(this.state.posts)}
                                    </div>
                                </div>
                            </div>
        
                </div>
        
        
        
            )

        }
    
    

}

export default PostForm
