import React from 'react';
import { addAbortSignal } from 'stream';
import { forEachTrailingCommentRange } from 'typescript';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home name='[User]' age={18} />
    </div>
  );
}

export default App;
