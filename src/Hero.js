import React from 'react';
import './App.css';
import logo from './logo.svg';

export default class Hero extends React.Component {
  
  
    render (){
    return(    
        <div class="hero is-large">
            <div class="hero-body">
            <div class="tile is-ancestor">
                <div class="tile is-7 is-parent">
                    
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box">
                    <p class="title">Muhammad Arif Bin Rawi</p>
                    <p class="subtitle">Junior Software Developer, Aspiring Game Developer</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )};
}

