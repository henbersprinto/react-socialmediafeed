import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/navbar'

import { Counter } from './features/counter/Counter'
import Text from './features/text/Text'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { DeletePostPage } from './features/posts/DeletePostPage'

//test
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm}/>
          <Route exact path="/deletePost/:postId" component={DeletePostPage}/>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/text" component={Text}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
