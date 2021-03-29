import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    },
    postUpdated(state, action) {
      const {id, title, content} = action.payload;
      const existingPost = state.find(post => post.id === id);
      if(existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    postDeleted(state, action) {
      const existingPost = state.find(post => post.id === action.payload.id);
      if(existingPost) {
        const index = state.indexOf(existingPost);
        state.splice(index, 1);
      }
    }
  }
})

export const { postAdded, postUpdated, postDeleted } = postsSlice.actions

export default postsSlice.reducer