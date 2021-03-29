import React, {useState, useReducer} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/navbar/navbar'

function App() {
  const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]

  const [postsState, setPostsState] = useState(initialState);
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </Router>
  );
}

export default App;
