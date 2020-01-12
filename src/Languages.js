import React from 'react';
import './App.css';

export default class Language extends React.Component {
    state = {
        title:""
    }

    displayLanguages = (event) => {
        console.log(event.target.id)
        if (event.target.id == "one"){
            this.setState({
                title: "HTML",
                content: "lorem ipsum"
            })
        }

        else if (event.target.id == "two") {
            this.setState({
                title:"JavaScript",
                content: "kawabunga"
            })
        }

        else{
            this.setState({
                title:"Python",
                content:"if you were here"
            })
        }
    }
    
    render (){
    return(    
        <div>
            <div class="tile is-ancestor box" className="background">
                <div class="tile is-vertical">
                    <div class="tile is-parent title">Languages</div>
                        <div class="tile">
                            <div class="tile is-4 is-vertical is-parent">
                                <div class="tile is-child box" id="one" 
                                onMouseEnter={this.displayLanguages}>
                                <p class="title one">HTML</p>
                                </div>
                                <div class="tile is-child box" id="two" 
                                onMouseEnter={this.displayLanguages}>
                                <p class="title">JavaScript</p>
                                </div>
                                <div class="tile is-child box" id="three" 
                                onMouseEnter={this.displayLanguages}>
                                <p class="title">Python</p>
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
            </div>
        </div>
    )};
}

