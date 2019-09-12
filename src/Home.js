import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people')
            .then(res => {
                this.setState({
                    posts: res.data.results.slice(0,6)
                })
            })
    }
    render() {
        let { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                post.id = Math.random();
                console.log(post.id);
                return (
                   <div className="post card" key={post.id}>
                       <div className="card-content">
                           <h4 className="card-title">{post.name}</h4>
                           <p>{'Height: ' + post.height}</p>
                           <p>{'Mass: ' + post.mass}</p>
                       </div>
                   </div>
               ) 
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h1 className="center">StarWars</h1>
                <div className="postList center">
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home
