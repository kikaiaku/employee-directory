import React from 'react';
import main from "./components/main";
import wrapper from "./components/wrapper";
import header from "./components/header"

import './App.css';

function App() {
  return (
    <div className="App">
      <wrapper>
        <header />
        <main />
      </wrapper>
    </div>
  );
}

export default App;
