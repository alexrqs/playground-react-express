import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function customHook(param) {
  let state = param || 0

  function setState(nextParam) {
    state = nextParam

    return state
  }

  return [state, setState]
}

const App = () => {
  const [product, setProduct] = useState()
  const [count, setCount] = customHook(2)
  const [post, setPost] = useState(0)

  function handleCount() {
    setCount(state => state +1)
  }

  useEffect(() => {
    setPost(count)
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          post: {post} <code>src/App.js{count}</code>.
          <button onClick={handleCount}>add to count</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
