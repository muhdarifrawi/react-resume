import React from 'react';
import './App.css';
import logo from './logo.svg';

export default class Hero extends React.Component {
  
  
    render (){
    return(    
        <div class="hero-body hero-image">
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
    )};
}

