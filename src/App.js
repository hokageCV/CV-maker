import './style/style.css';
import React, { useState }  from 'react';
import InputPersonalDetails from './components/InputPersonalDetails';
import InputEduDetails from './components/InputEduDetails';
import InputProjectDetails from './components/InputProjectDetails';
import RenderCV from './components/renderCV';


function App() {
  // state for personal details
  const [personalDetails, setPersonalDetails] = useState({
    name:"Hashirama Senju",
    email: "founder@konoha.ninja",
    contact: 123456789
  })
  // state for education details 
  const [eduDetails, setEduDetails] = useState({
    college:"self taught ninja",
    degree:"best shinobi",
    passingYear:"1934"
  })
  // state for project details
  const [projectDetails, setProjectDetails] = useState({
    projectName:"Konoha",
    madeUsing:"perseverance",
    impLearning:"distribute equal power"
  })

  //handle click for personal details
  function handleClickPersonal(event){
    setPersonalDetails(prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]: event.target.value 
    }
    })
  }
  // handle click for education details
  function handleClickEdu(event){
    setEduDetails(prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]: event.target.value 
    }
    })
  }
  // handle click for project details
  function handleClickProject(event){
    setProjectDetails(prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]: event.target.value 
    }
    })
  }



  return (
    <div className="app">
      <div className="inputDiv">
        <h1>Personal Details</h1>
        <InputPersonalDetails data={personalDetails} onChange={handleClickPersonal} />
        
        <h1>Educational Details</h1>
        <InputEduDetails data={eduDetails} onChange={handleClickEdu} />
        
        <h1>Project Details</h1>
        <InputProjectDetails data={projectDetails} onChange={handleClickProject} />
      </div>
      <div className="CVdiv">
        <RenderCV
            personalDetails = {personalDetails}
            eduDetails = {eduDetails}
            projectDetails = {projectDetails}
        />
      </div>
    </div>
    
  );
}

export default App;
