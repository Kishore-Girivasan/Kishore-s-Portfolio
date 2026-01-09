import '../styles/About.css'
import Portfolio from '../assets/images/Portfolio-img.jpeg';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About(){
    return(
        <div id="about" className="about-container">
            <div className='about-header'>
                <h1>About Me</h1>
            </div>
            <div className='about-content'>
                <div className='image-container'><img src={Portfolio} alt="Profile"/></div>
                <div className='about-text'>
                    <h3>
                        Nice to meet you, I’m Kishore - the developer you’ve been looking for.
                    </h3>
                    <p>
                        I am a Full Stack Engineer with an Integrated M.Tech in Software Engineering from VIT Vellore. I have extensive experience building production web applications using React, TypeScript, and Ruby on Rails to deliver scalable technical solutions. My focus is on owning features end-to-end, from developing modular frontend components to integrating robust backend services.
                    </p>
                    <div className='icon-column'>
                        <a href="mailto:kishoregirivasan11@gmail.com" target='_blank' rel='noreferrer'><MdEmail /></a>
                        <a href="https://www.linkedin.com/in/kishoregirivasan/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                        <a href="https://github.com/Kishore-Girivasan" target='_blank' rel='noreferrer'><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About