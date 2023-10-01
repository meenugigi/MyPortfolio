import React, { Component } from 'react';

export default function About(props){
    return(
      
      <div id="about">  
      <br/>
            <div className='split' >
                <div className='centered'>
                    <span className='header'>Basic Information</span><br /><br />
                    <span className='titleheads'>{props.dateOfBirthheader}</span>
                    <span className='data'>{props.dateOfBirth}</span><br/><br/>
                    <span className='titleheads'>{props.emailheader}</span>
                    <span className='data'>{props.email}</span><br/><br/>
                    <span className='titleheads'>{props.addressheader}</span>
                    <span className='data'>{props.address}</span><br/><br/>
                    <span className='titleheads'>{props.contactheader}</span>
                    <span className='data'>{props.contact}</span><br/><br/>
                </div>
            
                <div className='centered'>
                    <span className='header'>About</span><br /><br />
                    <span className='data'>{props.intro}</span><br/><br/>
                    <ul>
                        <li className='data'>{props.data1}</li><br/>
                        <li className='data'>{props.data2}</li><br/>
                        <li className='data'>{props.data3}</li><br/>
                    </ul>
                </div>
            </div>
          </div>
        
    )
}

// to give the scrolling effect
function reveal() {
    var reveals = document.querySelectorAll(".split");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 130;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  reveal();