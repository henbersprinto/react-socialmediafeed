
const postAdded = (state, payload) => {
    const {title, content} = payload;
    const newPost = {
        id: `${state.posts.length + 1}`,
        title: title,
        content: content
    }
    return {...state, posts: [...state.posts, newPost]};
}

const postUpdated = (state, payload) => {
    const {id, title, content} = payload;
    const index = state.posts.findIndex(p => p.id === id);
    if(index !== undefined){
        // Eftersom vi inte får förändra vårt state gör vi en kopia av det vi vill ändra
        let postlistCopy = [...state.posts];
        postlistCopy[index] = {...postlistCopy[index], title: title, content: content}
        return {...state, posts: postlistCopy};
    }
    return state;
}

const postDeleted = (state, payload) => {
    const {postId} = payload;
    const existingPost = state.posts.find(post => post.id === postId);
    if(existingPost) {
        return {...state, posts: [...state.posts.filter(p => p.id !== postId)]};
    } else {
        return state;
    }
}

const postsReducer = (state, action) => {
    switch(action.type) {
        case "POST_ADDED": {
            return postAdded(state, action.payload);
        }
        case "POST_EDIT": {
            return postUpdated(state, action.payload);
        }
        case "POST_DELETE" : {
            return postDeleted(state, action.payload)
        }
        default: return state;
    }
};

export default postsReducer;