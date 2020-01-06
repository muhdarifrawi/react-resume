import React from 'react';
import './App.css';

export default class Language extends React.Component {
    state = {
        title:""
    }

    displayTitle = (event) => {
        console.log(event.target.id)
        if (event.target.id == "one"){
            this.setState({
                title: "One",
                content: "lorem ipsum"
            })
        }

        else if (event.target.id == "two") {
            this.setState({
                title:"Two",
                content: "kawabunga"
            })
        }

        else{
            this.setState({
                title:"Three",
                content:"if you were here"
            })
        }
    }
    
    render (){
    return(    
        <div>
        <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box" id="one" onMouseEnter={this.displayTitle}>
            <p class="title one">One</p>
            </div>
            <div class="tile is-child box" id="two" onMouseEnter={this.displayTitle}>
            <p class="title">Two</p>
            </div>
            <div class="tile is-child box" id="three" onMouseEnter={this.displayTitle}>
            <p class="title">Three</p>
            </div>
        </div>
        <div class="tile is-parent">
            <div class="tile is-child box">
            <p class="title">{this.state.title}</p>
            <p>{this.state.content}</p>
            </div>
        </div>
        </div>
        </div>
    )};
}

