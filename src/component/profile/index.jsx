import React,{Component} from 'react';
import './profile.style.css';

class Profile extends Component{

    render(){
        return(
            <div className='Container'>
                <div className='Bio'>
                    <h3>Md Iqram Khan</h3>
                    <p>Full stack Javascript Developer</p>
                </div>
                <div className='Skills'>
                    <h3>Skills: </h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className='Links'>
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Twiteer</a></li>
                    </ul>
                  
                </div>
            </div>
        )
    }
}

export default Profile
