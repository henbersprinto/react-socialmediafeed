import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import counterReducer from '../features/counter/counterSlice';
import textReducer from '../features/text/textSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
    text: textReducer
  }
});
