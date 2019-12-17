import React from 'react';
import './App.css';

import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <div class="columns">
        <div class="column">1
          <button class="button">
            Button
          </button>
        </div>
        <div class="column">2
          <button class="button is-primary">
            Primary button
          </button>
        </div>
        <div class="column">3
          <button class="button is-large">
            Large button
          </button>
        </div>
        <div class="column">4
          <button class="button is-loading">
            Loading button
          </button>
        </div>
        <div class="column">5</div>
      </div>
    </div>
  );
}

export default App;
