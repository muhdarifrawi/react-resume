import React from 'react';
import './App.css';
import logo from './logo.svg'

import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <section class="hero is-success is-fullheight">
        <div class="hero-body">
        <figure class="image" >
          <img className="App-logo" src={logo}/>
        </figure>
          <div class="container">
            <h1 class="title">
              Fullheight title
            </h1>
            <h2 class="subtitle">
              Fullheight subtitle
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
