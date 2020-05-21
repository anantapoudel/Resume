import React from 'react';
import './App.css';
import './logo.svg';
import img from './img/sunset.jpg'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      <Home></Home>
      



      
      <center> <b> <h3> Ananta Poudel </h3></b></center>
      <center> <p> Kalamazoo, Michigan 49007  | ananta.poudel@wmich.edu | +1(269) 366-9387</p></center>
      <hr></hr>
      <h4> &nbsp;&nbsp;Objective</h4>
      <p>&nbsp;&nbsp;Seeking for an interesting and challenging role in Software Development and Testing as an entry level Software Engineer.</p>
      <h4> &nbsp;&nbsp;Education</h4>

      <p> <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Western Michigan University,</b> Kalamazoo, Michigan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August, 2018- May, 2022</p>
      {/* <View>
  <Text style={{textAlign: 'right'}}>August 2018- May 2022</Text>
</View><p> */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intended Major: Computer Science, </p>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Honors:</p>
      <ul>
        <li> Volunteer: Peer to Peer Education Program</li>
        <li> Member : Computer Science Club, Studentbody Government, Investment Club</li>
      </ul>
      <br></br>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Skills:</p>
      <ul>
        <li>Operating System: Windows, OSX, Unix, Linux</li>
        <li>Programming Languages: C++, Html, CSS, JavaScript, C#, Python, Selenium, GIT, SQL, Java
          <li>Software: Visual Studio, Android Studio, Unity</li>
          <li>Design UML, Object Oriented Analysis and Design (OOAD), Agile and Scrum Methodologies</li>
        </li>
      </ul>
      <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience</h4>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Help Desk, Western Michigan University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2019- March-2022</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b> Information Technology Consultant</b></p>
      <ul>
        <li>Responsible for the troubleshooting the network issues liked mapped drives, network printers etc.</li>
        <li>Responsible for the LAN network and wireless setup and also for the troubleshooting.</li>
        <li>Answer technical questions via phone, chat, walk-ins or email.</li>
        <li>Responsible for installing, imaging, setup and maintenance of the Desktops and Laptops</li>
        <li>Acquired strong interpersonal communication skill by building good rapport with Students, Faculty and Alumni</li>
        <li>Developed profound knowledge on Customer Relationship Management Software (Oracle Right Now & JIRA)</li>
      </ul>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dining Services | Kalamazoo, Michigan</p>
      <h4>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Student Supervisor</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2018- Present </h4>
      <ul>
        <li> Responsible for resolving any issue related to guests or the dining facility
        </li>
        <li> Ensure that the dining center runs smoothly </li>
        <li> Supervise other Student Employees</li>
      </ul>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Additional Skills</h3>
      <ul> <li>Languages </li>
      <ul>
        <li>English
          <li>French</li>
          <li>Nepalese</li>
          <li> Hindi</li>
        </li>
        </ul>
        <li> Volunteering Works</li>
        <ul>
          <li>Earthquake Relief Voluntering Program </li>
          <li> Youth Club</li>
          <li> Red Cross Society Volunteer</li></ul></ul>
      

      {/* <h1> Hello, And Welcome</h1> */}
      {/* <img src= {img} alt="pic" height='1024px' width='1524px'/> */}

      
    </div>
    </Router>
  );
}

export default App;
