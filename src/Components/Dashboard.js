import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const wallpaper = new URL("../images/dashboard.jpg", import.meta.url)
const profilepic = new URL("../images/profilephoto.JPG", import.meta.url)
const github = new URL("../images/github.png", import.meta.url)
const linkedin = new URL("../images/linkedin.png", import.meta.url)

export default function Dashboard(props){



    return(
        
        
            <div className='intro' id="home">
                    
                    <img src={wallpaper} className="wallpaper-image"/>
                    <img src={profilepic} className="profile-pic"/>
                    <div className='title'>{props.title}</div><br/>
                    <div className='role'>{props.role}</div><br/>
                    <a href ={props.github}><img src={github} className="github-pic"/></a>
                    <a href ={props.linkedin}><img src={linkedin} className="linkedin-pic"/></a>
                    <a href={props.download} download className='download'><button id="btn">Download Resume</button></a>
                           
            </div>

            
       
    )


}