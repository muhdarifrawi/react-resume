import React from 'react';
import './App.css';

export default class Education extends React.Component {

    render (){
    return(   
        <div> 
            
            <div class="tile is-ancestor box">
                <div class="tile is-vertical">
                <div class="tile title is-parent">Education</div>
                <div class="tile title">
                    <div class="tile is-parent ">
                        <div class="tile is-child box">Trent Global College</div>
                    </div>
                    <div class="tile is-parent ">
                        <div class="tile is-child box">Singapore Polytechnic</div>
                    </div>
                    <div class="tile is-parent ">
                        <div class="tile is-child box">Changkat Changi Secondary</div>
                    </div>
                </div>
                <div class="tile">
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            Wololol
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )};
}

