import './App.css';
import React, { Component } from 'react';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

import dashboarddata from './Data/dashboarddata';
import aboutdata from './Data/aboutdata';
import maincontentdata from './Data/maincontentdata';
import footerdata from './Data/footerdata';
import Navbars from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  
  const dashboard = dashboarddata.map(item => {
    return (
      <div>
          <div className="App">
              <Dashboard
                    img={item.img}
                    tagline1={item.tagline1}
                    title={item.title}
                    email={item.email}
                    contact={item.contact }
                    github={item.github}
                    linkedin={item.linkedin}
                    download={item.download}
                    smallintroline1={item.smallintroline1}
                    smallintroline2={item.smallintroline2}
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

    const maincontent = maincontentdata.map(item => {
        return (
            <div>
                <div className="App">
                    <MainContent
                        aboutline1={item.aboutline1}
                        aboutline2={item.aboutline2}
                        aboutline3={item.aboutline3}
                        aboutline4={item.aboutline4}
                        masters={item.masters}
                        mastersschool={item.mastersschool}
                        undergrad={item.undergrad}
                        undergradschool={item.undergradschool}
                        collinswork={item.collinswork}
                        ecolabwork={item.ecolabwork}
                        mechprogramminggrader={item.mechprogramminggrader}
                        javagrader={item.javagrader}
                        project1={item.project1}
                        project1_githubrepo={item.project1_githubrepo}
                        project2={item.project2}
                        project2_githubrepo={item.project2_githubrepo}
                        github={item.github }
                    />
                </div>
            </div>
        )
    })

    

    const footer = footerdata.map(item => {
        return (
            <div>
                <div className="App">
                    <Footer
                        github={item.github}
                        acknowledgement={item.acknowledgement}
                        copyrights={item.copyrights}
                    />
                </div>
            </div>
        )
    })


  return (
    <div>
        <Navbars />
        {dashboard}
        {maincontent}
        {footer } 
    </div>
    )
}




export default App;
