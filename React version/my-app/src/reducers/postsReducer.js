import {uuid} from 'react-uuid'
const postAdded = (state, title, content) => {
    const newPost = {
        id: uuid(),
        title: title,
        content: content
    }
    return {...state, posts: (state.posts.push(newPost))}
}

const postsReducer = (state, action) => {
    switch(action.type) {
        case "POST_ADDED": {
            const {title, content} = action.payload;
            return postAdded(state, title, content);
        }
    }

};



// reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.push(action.payload)
//       },
//       prepare(title, content) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content
//           }
//         }
//       }
//     },
//     postUpdated(state, action) {
//       const {id, title, content} = action.payload;
//       const existingPost = state.find(post => post.id === id);
//       if(existingPost) {
//         existingPost.title = title;
//         existingPost.content = content;
//       }
//     },
//     postDeleted(state, action) {
//       const existingPost = state.find(post => post.id === action.payload.id);
//       if(existingPost) {
//         const index = state.indexOf(existingPost);
//         state.splice(index, 1);
//       }
//     }
//   }
// })

// export const { postAdded, postUpdated, postDeleted } = postsSlice.actions

export default postsSlice.reducer

export default postsReducer;