import React, { Component } from 'react';

const bullet = new URL("../images/bullet.png", import.meta.url)

export default function WorkExperience(props){
    return(
        <div id="workexperience">
            <br/><br/><br/><br/>
            <span className='header'>Work Experience</span>
            <div className='work'>
                <ul>
                    <div className='internship'><li className='bullet'>
                        <span className='worksubtitle'>{props.gradertitle}</span>
                        <span className='date'>{props.graderdate}</span><br /><br/>
                        <span className='jobrole'>{props.graderrole}</span><br /><br />
                        <span className='data'>{props.graderdesc}</span><br />
                    </li>
                    </div>

                    <div className='workexp'><li className='bullet'>
                        <span className='worksubtitle'>{props.worktitle}</span>
                        <span className='date'>{props.workdate}</span><br/><br/>
                        <span className='jobrole'>{props.workrole}</span><br /><br/>
                        </li>
                        <ul>
                            <li className='data'>{props.fulltimedescription}</li><br/>
                            <li className='data'>{props.data1}</li><br/>
                            <li className='data'>{props.data2}</li><br/>
                        </ul>
                    </div>
                    {/* </li> */}
                    
                    <div className='internship'><li className='bullet'>
                        <span className='worksubtitle'>{props.interntitle}</span><br/><br/>
                        <span className='jobrole'>{props.internrole}</span><br /><br/>
                        <span className='data'>{props.interndescription}</span><br />
                    </li>
                    </div>
                    {/* </li> */}
                </ul>
                
            </div>

        </div>
        
    )
}