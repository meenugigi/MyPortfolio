import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const wallpaper = new URL("../images/dashboard.jpg", import.meta.url)
const profilepic = new URL("../images/profilephoto.JPG", import.meta.url)
const github = new URL("../images/github.png", import.meta.url)
const linkedin = new URL("../images/linkedin.png", import.meta.url)

export default function Dashboard(props){

    return(
        <div className='dashboard-container' >
            <div className='dashboard-left' id="home">
                <img src={wallpaper} className="wallpaper-image" />
                <img src={profilepic} className="profile-pic" />
                <div className='tagline'>{props.tagline1}</div><br />
                <div className='title'>{props.title}</div><br/>
                <div className='email'>{props.email}</div><br />
                <div className='contact'>{props.contact}</div><br />
                
                           
            </div>


            <div className='dashboard-right'>
                <div className='small-intro'>{props.smallintroline1}<span id='smallintroline2'>{props.smallintroline2}</span> </div><br /><br />
                <a href={props.github}><img src={github} className="github-pic" /></a>
                <a href={props.linkedin}><img src={linkedin} className="linkedin-pic" /></a>
                <a href={props.download} download className='download'><button id="btn">Download Resume</button></a>
               
            </div>
        </div>

            
       
    )


}