import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <div>
            <h1>Vistas</h1>
             <div className="conteiner_all">
                {this.props.posts.map((post) => (
                <div key={post.id}>
                {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                key={post.id} />}
             </div>
                ))}
             </div>
              
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);