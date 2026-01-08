import '../styles/About.css'
import Portfolio from '../assets/images/portfolio-img.jpeg'
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About(){
    return(
        <div className="about-container">
            <div className='about-header'>
                <h1>About Me</h1>
            </div>
            <div className='about-content'>
                <div className='image-container'><img src={Portfolio} alt="Profile"/></div>
                <div className='about-text'>
                    <h3>
                        Nice to meet you, this is Kishore—the person you are mostly looking for.
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nostrum iure a quibusdam! Molestias ex repudiandae provident, corrupti quae consectetur nulla. Placeat sunt dolores distinctio est incidunt consectetur? Quo, at.
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