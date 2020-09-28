import React, { Component } from "react";
import Bio from './bio';
import Links from "./links";
import Skills from "./skills";
import "./profile.style.css";

class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <Bio name="Md Iqram Khan" title="Fullstack Javascript Developer"/>
        <Skills skill1='Java' skill2='Python'skill3='Javascript' />
        <Links />
      </div>
    );
  }
}

export default Profile;
