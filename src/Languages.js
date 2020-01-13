import React from 'react';
import './App.css';

export default class Language extends React.Component {
    state = {
        title:"",
        frameworks: "",
        content:""
    }

    displayLanguages = (event) => {
        console.log(event.target.id)
        if (event.target.id == "one"){
            this.setState({
                title: "HTML/CSS",
                frameworks: `Frameworks: Bootstrap, Materialize, Bulma`,
                content: `
                The basic knowledge of most developers. This is where most of us starts in. 
                Knowing how your website would look like and seeing how each code does to each
                component. 
                `
            })
        }

        else if (event.target.id == "two") {
            this.setState({
                title:"JavaScript",
                frameworks: `Frameworks: JQuery`,
                content: `Used heavily for DOM manipulation and using AXIOS for API applications. 
                Having knowledge of JavaScript is useful in creating more dynamic webpages
                and implementing API to your webpage. 
                `
            })
        }

        else{
            this.setState({
                title:"Python",
                frameworks: `Frameworks: Flask, Django`,
                content:`Used as an intermediary code to communicate between webpage and database servers.
                Flask allows users to navigate to other pages with a dedicated URL. With more practice, users
                of Flask would be able to create a fully fleshed e-commerce platform. Django however, is a more 
                complete framework. Users of Django would not have to worry much on the design aspect as it is 
                built for 'plug and play'.
                `
            })
        }
    }
    
    render (){
    return(    
        <div>
            <div class="tile is-ancestor box">
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
                                <p class="subtitle">{this.state.frameworks}</p>
                                <p>{this.state.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )};
}

