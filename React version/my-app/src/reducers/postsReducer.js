
const postAdded = (state, payload) => {
    const {title, content} = payload;
    const newPost = {
        id: `${state.posts.length + 1}`,
        title: title,
        content: content
    }
    state.posts.push(newPost);
    return {...state};
}

const postUpdated = (state, payload) => {
    const {id, title, content} = payload;

    const existingPost = state.posts.find(post => post.id === id);
    if(existingPost) {
        existingPost.title = title;
        existingPost.content = content;
    }
    const i = state.posts.indexOf(existingPost); 
    state.posts[i] = existingPost;
    return {...state};
}

const postDeleted = (state, payload) => {
    const {postId} = payload;

    const existingPost = state.posts.find(post => post.id === postId);
    if(existingPost) {
        const indexOfPostToRemove = state.posts.indexOf(existingPost);
        state.posts.splice(indexOfPostToRemove, 1);
        return {...state};
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