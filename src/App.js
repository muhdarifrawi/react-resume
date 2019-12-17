import React from 'react';
import './App.css';

import "bulma/sass/utilities/_all.sass"
import "bulma/sass/grid/columns.sass"

function App() {
  return (
    <div className="App">
      <div class="columns">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
        <div class="column">5</div>
      </div>
    </div>
  );
}

export default App;
