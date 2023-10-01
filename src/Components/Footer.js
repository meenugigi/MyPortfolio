import React, { Component } from 'react';

const footericon = new URL("../images/footer.jpg", import.meta.url)

export default function Footer(props){
    return(
        <div className="footer">
            <div className='positionfootericon'>
                <a href={props.github} smooth className="link" ><img src={footericon} className="footericon" /></a>
            </div>
            <div className='copyrights'>
                <div>{props.acknowledgement} &copy; {props.copyrights}</div>
            </div>
            
        </div>
    )
}


