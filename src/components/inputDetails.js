import React from "react";

function handleSubmit(event) {
    event.preventDefault();
    console.log( "submit" );
};

class InputForm extends React.Component {
    
    render(){
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="personalDetails">
                        <label for="name">Name :
                            <input type="text" placeholder="write your name" />
                        </label>
                        <br></br>
                        <label for="email">Email :
                            <input type="email" placeholder="email likho" />
                        </label>
                        <br></br>
                        <label for="number">Phone number :
                            <input type="number" placeholder="write your contact number" />
                        </label>
                    </div>
                    <div className="eduDetails">
                        <label for="college">College :
                            <input type="text" placeholder="konse college me padhe ho?" />
                        </label>
                        <br></br>
                        <label for="degree">Degree :
                            <input type="text" placeholder="konsi degree?" />
                        </label>
                        <br></br>
                        <label for="year">Year of Passing :
                            <input type="number" placeholder="" />
                        </label>
                    </div>
                    <div className="projectDetails">
                        <label for="projectName">Project Name :
                            <input type="text" placeholder="favourite project?" />
                        </label>
                        <br></br>
                        <label for="projectLearning">Project Learnings :
                            <input type="text" placeholder="project se kya seekha?" />
                        </label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export {InputForm};