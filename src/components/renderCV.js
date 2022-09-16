import React from 'react';

export default function RenderCV({personalDetails, eduDetails, projectDetails}){
    return(
        <div>
            <div className="render-persoanlDetails">
                <h1>{personalDetails.name}</h1>
                <small>    {personalDetails.email}       |          </small>
                <small>    {personalDetails.contact}</small>
            </div>
            <div className="render-eduDetails">
                <h3>Education Details</h3>
                <p>college : {eduDetails.college}</p>
                <p>degree : {eduDetails.degree}</p>
                <p>Passing Year : {eduDetails.passingYear}</p>
            </div>
            <div className="render-projectDetails">
                <h3>Project Details</h3>
                <p>Title :  {projectDetails.projectName}</p>
                <p>made using :  {projectDetails.madeUsing}</p>
                <p>Important learnings  :  {projectDetails.impLearning}</p>
            </div>
        </div>
    )
}