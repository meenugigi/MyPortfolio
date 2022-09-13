import './App.css';
import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Education from './Components/Education';
import WorkExperience from './Components/WorkExperience';
import Skills from './Components/Skills';
import dashboarddata from './Data/dashboarddata';
import aboutdata from './Data/aboutdata';
import workexpdata from './Data/workexpdata';
import Navbars from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const footer = new URL("./images/footer.jpg", import.meta.url)

function App() {

  
  const dashboard = dashboarddata.map(item => {
    return (
      <div>
          <div className="App">
              <Dashboard
                  img={item.img}
                  title={item.title}
                  role={item.role}
                  github={item.github}
                  linkedin={item.linkedin}
                  download={item.download}
              />      
          </div>
      </div>
    )
  })

  const about = aboutdata.map(item => {
    return (
      <div>
          <div className="App">
              <About
                  dateOfBirthheader={item.dateOfBirthheader}
                  dateOfBirth={item.dateOfBirth}
                  emailheader={item.emailheader}
                  email={item.email}
                  addressheader={item.addressheader}
                  address={item.address}
                  contactheader={item.contactheader}
                  contact={item.contact}
                  intro={item.intro}
                  data1={item.data1}
                  data2={item.data2}
                  data3={item.data3}
              />      
          </div>
      </div>
    )
  })

  const workexp = workexpdata.map(item => {
    return (
      <div>
          <div className="App">
              <WorkExperience
                  gradertitle={item.gradertitle}
                  graderrole={item.graderrole}
                  graderdate={item.graderdate}
                  
                  gradercourse={item.gradercourse}
                  graderdesc={item.graderdesc}
                  
                  worktitle={item.worktitle}
                  workdate={item.workdate}
                  workrole={item.workrole}
                  fulltimedescription={item.fulltimedescription}
                  data1={item.data1}
                  data2={item.data2}
                  interntitle={item.interntitle}
                  internrole={item.internrole}
                  interndescription={item.interndescription}
              />      
          </div>
      </div>
    )
  })



  return (
    <div>
        <Navbars />
        {dashboard}
        {about}
        <div className="App"><Skills /></div>
        {workexp}
        <div className="App"><Education
              graduate="Master's in Computer Science (2021 - Present)"
              graddescription ="Rochester Institute of Techology"
              undergrad="Bachelor's in Computer Science (2015 - 2019)"
              undergraddescription="Mumbai University"
          />   
          </div>
          <div className='positionfooter'>
              <a href="https://github.com/meenugigi" smooth className="link" ><img src={footer} className="footer"/></a>
          </div>
          <div className='copyrights'>
            <span>© All rights reserved.</span>
          </div>
        
    </div>
)

}




export default App;
