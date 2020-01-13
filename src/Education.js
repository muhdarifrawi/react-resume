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
                content:`Changkat Changi is a neighbourhood school located in the eastern side of Singapore. 
                They pride in having students excelling in both studies and co-curriculum activities. One of 
                the school's forte is their knowledge in technical studies. The shcool's Design and Tech curriculum 
                has been the most consistent and well-known to be the best within secondary schools.  
                `
            })
        }
        else if (event.target.id == "poly"){
            this.setState({
                title:"Polytechnic",
                content:`
                A graduate in Diploma in Clean Energy. Contrary to what many would think, this is 
                actually an Electrical and Electronic Engineering course. Students are primarily taught
                on how power grid systems function and how clean energy systems can be linked up to them.
                Majority of the lessons consists of Photovoltaic systems but various systems were taught 
                as well. Such as wind turbine, hydroelectric, fuel cells and biodiesels.
                `
            })
        }
        else{
            this.setState({
                title:"Code Institute, Bootcamp",
                content:`
                A  four months Bootcamp endorsed by Info-communications Media Development Authority (IMDA).
                Targeted to working adults thinking of a career change to a tech industry. During these 
                four months, students are taught on how to develop a full-stack webpage. They are separated
                into four parts, with each part having new languages taught to us. Students are required to 
                submit projects each month. Students graduate of Trent Global Bootcamp graduates with a 
                Diploma in Software Development. 
                `
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

