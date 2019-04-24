import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    render() {
    const { postId } = this.props.params.postId;
    const index = this.props.posts.findIndex((posts) => posts.code === postId);
    const posts = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];
    return (
        <div className="single-photo">
           <Photo
                  index={index} 
                  posts={posts}
                  {...this.props} 
                  />
          <Comments postComments={postComments}/>
        </div>
        );
    }
}

export default Single;