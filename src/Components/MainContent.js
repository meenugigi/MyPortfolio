import React, { useState } from 'react';
import { Link } from 'react-scroll';
import CollinsWorkExp from './CollinsWorkExp';
import EcolabWorkExp from './EcolabWorkExp';

const gotoarrow = new URL("../images/go-to-arrow.png", import.meta.url)
const creditscore_project1 = new URL("../images/creditscore_project1.png", import.meta.url)
const food_ordering_project2 = new URL("../images/food_ordering_project2.png", import.meta.url)



export default function MainContent(props) {
    console.log(props)
    const [showCollinsWork, setShowCollinsWork] = useState(false);

    const [showEcolabWork, setShowEcolabWork] = useState(false);

    const handleToggleCollinsWork = () => {
        setShowCollinsWork(!showCollinsWork);
    };

    const handleToggleEcolabWork = () => {
        setShowEcolabWork(!showEcolabWork);
    };


   
    return (
       
        <div className="parent-container" id="maincontentpage">

            <div className="maincontentpage-container">
                <div className='maincontentpage-left' id="about">
                    <div className='about-me'>
                        <div className='about-header'>About Me</div><br />
                        <div className='about-text'>{props.aboutline1}</div> <br></br>
                        <div className='about-text'>{props.aboutline2}</div> <br></br>
                        <div className='about-text'>{props.aboutline3}</div> <br></br>
                        <div className='about-text'>{props.aboutline4}</div> <br></br>
                    </div>
                    <br></br>
                </div>


                <div className='maincontentpage-right' >
                    <div className='education' id="education">
                        <div className='education-level'>{props.masters}</div> 
                        <div className='education-school'>{props.mastersschool}</div> <br></br>
                        <div className='education-level'>{props.undergrad}</div> 
                        <div className='education-school'>{props.undergradschool}</div> <br></br>
                    </div>
                    <br></br>
                    <br></br>

                    <div class="card-profexp" id="workexperience">
                        <div class="container-prof">
                            <div className='profexp-timeline'>MAY 2023 - PRESENT <br></br> <i>Full - time</i></div>
                            <div className='profexp-details'>
                                <div className='work-title'>Software Engineer Co-op &middot; Collins Aerospace</div>
                                <div className='work-details'>{props.collinswork}</div>
                                <Link
                                    to="collinsworkexp"
                                    smooth={true}
                                    className="link"
                                    id="item-padding"
                                    onClick={handleToggleCollinsWork}> {showCollinsWork ? 'Read less...' : 'Read more...'}</Link>
                                    {showCollinsWork && <CollinsWorkExp />}
                                <br></br>
                                <div className='work-skills'> C/C++</div>
                                <div className='work-skills'> Jira</div>
                                <div className='work-skills'> IBM Rational Doors</div>
                                <div className='work-skills'> PREP</div>
                                <div className='work-skills'> TortoiseSVN</div>
                                <div className='work-skills'> Vista</div>
                                <div className='work-skills'> ARINC Trace</div>
                                <div className='work-skills'> Agile Framework</div>
                                <div className='work-skills'> Embedded Systems</div>
                                <div className='work-skills'> Software Verification</div>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div class="card-profexp">
                        <div class="container-prof">
                            <div className='profexp-timeline'>JAN 2023 - MAY 2023 <br></br> <i>Full - time</i></div>
                            <div className='profexp-details'>
                                <div className='work-title'>Software Engineer Co-op &middot; Ecolab</div>
                                <div className='work-details'>{props.ecolabwork}</div>
                                <Link
                                    to="ecolabworkexp"
                                    smooth={true}
                                    className="link"
                                    id="item-padding"
                                    onClick={handleToggleEcolabWork}> {showEcolabWork ? 'Read less...' : 'Read more...'}</Link>
                                {showEcolabWork && <EcolabWorkExp />}
                                <br></br>
                                <div className='work-skills'> C#</div>
                                <div className='work-skills'> .NET Frameworks</div>
                                <div className='work-skills'> Entity Framework Core</div>
                                <div className='work-skills'> JavaScript</div>
                                <div className='work-skills'> JQuery</div>
                                <div className='work-skills'> Microsoft SQL Server</div>
                                <div className='work-skills'> Azure DevOps</div>
                                <div className='work-skills'> Agile Framework</div>
                                <div className='work-skills'> ASP.NET Razor</div>
                                <div className='work-skills'> NUnit</div>
                                <div className='work-skills'> AJAX</div>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div class="card-profexp">
                    <div class="container-prof">
                            <div className='profexp-timeline'>JAN 2023 - MAY 2023 <br></br> <i>Full - time</i></div>
                        <div className='profexp-details'>
                                <div className='work-title'>Software Engineer Co-op &middot; Ecolab</div>
                            <div className='work-details'>{props.ecolabwork}</div>
                            <br></br>
                            <div className='work-skills'> C#</div>
                            <div className='work-skills'> .NET Frameworks</div>
                            <div className='work-skills'> Entity Framework Core</div>
                            <div className='work-skills'> JavaScript</div>
                            <div className='work-skills'> JQuery</div>
                            <div className='work-skills'> Microsoft SQL Server</div>
                            <div className='work-skills'> Azure DevOps</div>
                            <div className='work-skills'> Agile Framework</div>
                            <div className='work-skills'> ASP.NET Razor</div>
                            <div className='work-skills'> NUnit</div>
                            <div className='work-skills'> AJAX</div>
                        </div>
                    </div>
                </div>
                <br></br>

                    <div class="card-profexp">
                        <div class="container-prof">
                            <div className='profexp-timeline'>AUG 2023 - PRESENT <br></br> <i>Part - time</i></div>
                            <div className='profexp-details'>
                                <div className='work-title'>CS Department Grader for Course - Mechanics of Programming &middot; Rochester Institute of Technology</div>
                                <div className='work-details'>{props.mechprogramminggrader}</div>
                                <br></br>
                                <div className='work-skills'> C/C++ </div>
                                <div className='work-skills'> Program Execution</div>
                        
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div class="card-profexp">
                        <div class="container-prof">
                            <div className='profexp-timeline'>AUG 2022 - DEC 2022 <br></br> <i>Part - time</i></div>
                            <div className='profexp-details'>
                                <div className='work-title'>CS Department Grader for Course - Advanced Object Oriented Programming Concepts &middot; Rochester Institute of Technology</div>
                                <div className='work-details'>{props.javagrader}</div>
                                <br></br>
                                <div className='work-skills'> Java </div>
                                <div className='work-skills'> OOPS Concepts</div>

                            </div>
                        </div>
                    </div>
                    <br></br>
                
                </div>
            </div>
            <br></br><br></br>


            <div class="flex-container" id="projects">
                <a href={props.project1_githubrepo} className = 'project'>
                        <div className='project-left'>
                            <img src={creditscore_project1} className="project-image" />
                        </div>
                        <div className='project-right'>
                        <div className='project-title'>Credit Score Classification <img src={gotoarrow} className="go-to-github-project-arrow" /></div>
                            <div className='project-details'>{props.project1}</div><br></br>
                        <div className='work-skills'> Data Manipulation Libraries </div>
                        <div className='work-skills'> Python - Flask</div>
                        <div className='work-skills'> ML algorithms </div>
                        <div className='work-skills'> HTML5 </div>
                        <div className='work-skills'> CSS </div>
                        </div>
                </a>


                <a href={props.project2_githubrepo} className='project'>
                    <div className='project-left'>
                        <img src={food_ordering_project2} className="project-image" />
                    </div>
                    <div className='project-right'>
                        <div className='project-title'>Food Ordering Application <img src={gotoarrow} className="go-to-github-project-arrow" /></div>
                        <div className='project-details'>{props.project2}</div><br></br>
                        <div className='work-skills'> Spring Web MVC </div>
                        <div className='work-skills'> Spring JDBC</div>
                        <div className='work-skills'> REST services </div>
                        <div className='work-skills'> MySQL Server </div>
                        <div className='work-skills'> Thymeleaf</div>
                        <div className='work-skills'> Hibernate</div>
                        <div className='work-skills'> Tomcat</div>
                    </div>
                </a>
            </div>

            <br></br>
            
            <div className='project-archive'><a href={props.github} className='project-archive'>View Full Project Archive
                <img src={gotoarrow} className="go-to-github-project-arrow" /> </a>
            </div>
           
           
            

            
            </div>
       

       

    )
}

// to give the scrolling effect to education section
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