import React from 'react';

import './App.css';
import Hero from "./Hero.js"
import Language from "./Languages.js";
import Education from "./Education.js"

import 'bulma/css/bulma.css';

import heroImage from "./images/heroImage.jpg";

function App() {
  return (
    <div>
      <section className="App" class="hero is-fullheight image">
      <Hero/>
      </section>

      <section>
      <Language/>
      </section>
      <section>
      <Education/>
      </section>
    </div>
  );
}

export default App;
