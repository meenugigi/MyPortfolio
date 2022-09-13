import React, { Component } from 'react';

export default function Education(props){
    return(
        <div id="education">
            <br/><br/><br/><br/>
             <span className='header'>Education</span>
            <div className='education'>
               
                <div className='grad-masters'>
                    <br/><br/>
                    <span className='graddata'>{props.graduate}</span><br/><br/>
                    <span className='subdata'>{props.graddescription}</span><br />
                </div>
                <br></br>
                <div className='grad-masters'>
                    <br/><br/>
                    <span className='graddata'>{props.undergrad}</span><br/><br/>
                    <span className='subdata'>{props.undergraddescription}</span><br />
                </div>
            </div>
        </div>
    )
}


// to give the scrolling effect
function reveal() {
    var reveals = document.querySelectorAll(".education");
  
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