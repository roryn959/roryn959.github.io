import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.png';
import mail from '../assets/images/mail.png';
import python from '../assets/images/python.png';
import java from '../assets/images/java.svg';
import c from '../assets/images/c.png';
import haskell from '../assets/images/haskell.png';
import tf from '../assets/images/tf.png';
import spring from '../assets/images/spring.jpeg';
import angular from '../assets/images/angular.png';
import react from '../assets/images/react.png';
import swift from '../assets/images/swift.png';
import azure from '../assets/images/azure.png';
import docker from '../assets/images/docker.png';
import html from '../assets/images/html.png';
import js from '../assets/images/js.png';

import { Navbar } from 'react-bootstrap';
import { useState } from 'react';

const NavComponent = () => {
  const [expanded, setExpanded] = useState();

    return ( 
      <Navbar expanded={expanded} bg='light' expand='lg'>
        <div className="container-fluid">

          <div className="navbar-brand pull-left">
            <a href="/" className="navbar-brand mb-0 h1">Portfolio</a>
          </div>

          <button className="navbar-toggler"
            type="button"
            onClick={()=>{setExpanded(!expanded);}}
            aria-controls="navbarText" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <Navbar.Collapse id='navbarText'>
            <ul className="nav navbar-pull-right">
              <li className="nav-item">
                <a className="navbar-brand" href="https://github.com/roryn959">
                    <img src={github} alt="Github" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                  <a className="navbar-brand" href="https://www.linkedin.com/in/rorybnicholas/">
                      <img src={linkedin} alt="LinkedIn" height="25"/>
                  </a>
              </li>
              <li className="nav-item">
                  <a className="navbar-brand" href="mailto:roryn959@icloud.com">
                      <img src={mail} alt="Mail" height="25"/>
                  </a>
              </li>
            </ul>
          </Navbar.Collapse>

          <div className="navbar-header pull-right d-none d-lg-block">
            <ul className="nav pull-left">
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.python.org">
                    <img src={python} alt="Python" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.java.com/en/">
                    <img src={java} alt="Java" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.open-std.org/jtc1/sc22/wg14/">
                    <img src={c} alt="C" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.haskell.org">
                    <img src={haskell} alt="Haskell" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.tensorflow.org">
                    <img src={tf} alt="Tensorflow" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://spring.io">
                    <img src={spring} alt="Spring" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://angular.io">
                    <img src={angular} alt="Angular" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://react.dev">
                    <img src={react} alt="React" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.swift.org">
                    <img src={swift} alt="Swift" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://azure.microsoft.com/en-in/">
                    <img src={azure} alt="Azure" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://www.docker.com">
                    <img src={docker} alt="Docker" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://html.spec.whatwg.org">
                    <img src={html} alt="HTML5" height="25"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="https://ecma-international.org/publications-and-standards/standards/ecma-262/">
                    <img src={js} alt="JavaScript" height="25"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
     );
}
 
export default NavComponent;