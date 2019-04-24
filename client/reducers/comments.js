const comments = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return console.log('added comment!');
        case 'REMOVE_COMMENT':
            return console.log('removed comment!');
        default:
            return state;
    }
}

export default comments;