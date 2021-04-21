import React, { useReducer } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'


//Components
import {Navbar} from './components/navbar/navbar'
import {AddPostForm} from './components/posts/AddPostForm'
import {EditPostForm} from './components/posts/EditPostForm'
import {PostsList} from './components/posts/PostsList'
import {SinglePostPage} from './components/posts/SinglePostPage'
import {DeletePostPage} from './components/posts/DeletePostPage'


//Reducers
import {postsReducer} from './reducers/postsReducer'


function App() {
  const initialState = {
    'posts': [
      { id: '1', title: 'First Post!', content: 'Hello!' },
      { id: '2', title: 'Second Post', content: 'More text' }
    ]
  }

  const [state, dispatch] = useReducer(postsReducer, initialState);
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm dispatch={dispatch} />
                <PostsList posts={state.posts} />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId">
            <SinglePostPage posts={state.posts} />
          </Route>
          <Route exact path="/editPost/:postId">
            <EditPostForm posts={state.posts} dispatch={dispatch} />
          </Route>
          <Route exact path="/deletePost/:postId">
            <DeletePostPage posts={state.posts} dispatch={dispatch} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
