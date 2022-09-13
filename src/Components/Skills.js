import React, { Component } from 'react';

export default function Skills(props){
    return(
        <div id="skills">
            <br/><br/><br/><br/>
            <span className='header'>Skills</span><br></br>
            <div className='skills'>



                
                <div className='languages'>
                    <div className='subtitle'><div className='skillshead'>Languages/Framework</div><br/>
                    <hr></hr>
                        <ul>
                            <li className='listdata'>Java</li><br/>
                            <li className='listdata'>Spring</li><br/>
                            <li className='listdata'>Hibernate</li><br/>
                            <li className='listdata'>Python</li><br/>
                            <li className='listdata'>Flask</li><br/>
                            <li className='listdata'>Django</li><br/>
                            {/* <li className='listdata'>HTML</li><br/>
                            <li className='listdata'>CSS</li><br/>
                            <li className='listdata'>React</li><br/> */}
                        </ul>
                    </div>
                </div>

                <div className='languages'>
                    <div className='subtitle'><div className='skillshead'>Services/RDBMS/Libraries</div><br/>
                    <hr></hr>
                    <ul>
                        <li className='listdata'>RESTful</li><br/>
                        <li className='listdata'> SQL</li><br/>
                        <li className='listdata'> PostgreSQL</li><br/>
                        <li className='listdata'>Pandas</li><br/>
                        <li className='listdata'> Numpy</li><br/>
                        <li className='listdata'>Matplotlib</li><br/>
                        <li className='listdata'>AWS</li><br/>
                        
                    </ul>
                    </div>
                </div>

                <div className='languages'>
                    <div className='subtitle'><div className='skillshead'>Front-End/IDE</div><br/>
                    <hr></hr>
                    <ul>
                        <li className='listdata'>HTML</li><br/>
                        <li className='listdata'>CSS</li><br/>
                        <li className='listdata'>React</li><br/>
                        <li className='listdata'>Pycharm</li><br/>
                        <li className='listdata'> IntelliJ</li><br/>
                        <li className='listdata'> Spring Tool Suite</li><br/>
                        <li className='listdata'>Visual Code Studio</li><br/>
                    </ul>
                    </div>
                </div>

                <div className='languages'>
                    <div className='subtitle'><div className='skillshead'>Tools/Others</div><br/>
                    <hr></hr>
                    <ul>
                        <li className='listdata'>Maven</li><br/>
                        <li className='listdata'> Gradle</li><br/>
                        <li className='listdata'> JUnit</li><br/>
                        <li className='listdata'>Jupyter</li><br/>
                        <li className='listdata'> Jira</li><br/>
                        <li className='listdata'> Bugzilla</li><br/>
                        <li className='listdata'>Postman</li><br/>
                        <li className='listdata'>Git</li><br/>
                    </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}


// to give the scrolling effect
function reveal() {
    var reveals = document.querySelectorAll(".skills");
  
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