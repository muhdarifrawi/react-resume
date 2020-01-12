import React from 'react';
import './Education.css';

export default class Education extends React.Component {

    state = {
        title:"",
        content:""
    }
    displayEducation = (event) => {
        if (event.target.id == "secondarySch"){
            this.setState({
                title:"Secondary School",
                content:""
            })
        }
        else if (event.target.id == "poly"){
            this.setState({
                title:"Polytechnic",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet libero ac orci bibendum, at hendrerit augue interdum. Integer posuere, ligula euismod cursus luctus, enim tortor elementum lectus, id cursus nunc urna sed purus. Nunc suscipit volutpat efficitur. In hac habitasse platea dictumst. Morbi nec neque nunc. Vivamus nulla nunc, sollicitudin nec semper quis, rutrum dignissim purus. Maecenas enim tellus, ultrices id nisi id, porttitor tincidunt risus. Phasellus lobortis, sapien id aliquet eleifend, metus quam rhoncus libero, vel pellentesque nunc diam ut dui."
            })
        }
        else{
            this.setState({
                title:"Bootcamp",
                content:"Lorem ispum till the end of the world."
            })
        }
    }

    render (){
    return(   
        <div className="Background"> 
            
            <div class="tile is-ancestor box">
                <div class="tile is-vertical">
                <div class="tile title is-parent">Education</div>
                <div class="tile title">
                    <div class="tile is-parent">
                        <div class="tile is-child box" id="bootcamp" onMouseOver={this.displayEducation}>Trent Global College</div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box"  id="poly" onMouseOver={this.displayEducation}>Singapore Polytechnic</div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box"  id="secondarySch" onMouseOver={this.displayEducation}>Changkat Changi Secondary</div>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-parent">
                        <div class="tile is-child box customBox1">
                            <p>{this.state.title}</p>
                            <p>{this.state.content}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )};
}

