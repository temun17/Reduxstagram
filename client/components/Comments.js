import React from 'react';

const Comments = React.createClass ({
    renderComments(comment, index) {
        return (
            <div className="comment" key={index}>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
            </div>
        );
    },
    render() {
    return (
        <div className="comments">
            {this.props.postComments.map(this.renderComments)}
        </div>
    );
    }
});

export default Comments;