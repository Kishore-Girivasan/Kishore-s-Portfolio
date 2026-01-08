import PowerSchool from '../assets/Images/powerschool.png'
import '../styles/Experience.css'

function Experience(){
    return(
        <div id="experience" className="experience-container">
            <div className="experience-header">
                <h1>Experience</h1>
            </div>
            <div className="experience-content">
                <div className="experience-item">
                    <img src={PowerSchool} alt="PowerSchool" />
                    <div className='experience-item-content'>
                        <h2>PowerSchool</h2>
                        <h5>Banglore</h5>
                        <h4>Associate Software Engineer 2 <span>June 2025 - December 2025</span></h4>
                        <ul>
                            <li>Owned and delivered end-to-end features for a global EdTech platform, integrating modular React/TypeScript frontend components with Ruby on Rails backend services.</li>
                            <li>Led the i18n implementation across multiple modules, enabling multi-language support and driving the successful global rollout of production features.</li>
                            <li>Developed responsive UI layouts and ensured cross-browser compatibility to provide accessible (a11y) and seamless user experiences across production environments.</li>
                            <li>Reduced regression issues by 25% through automated testing and utilized AI-assisted tools to improve system stability and development speed</li>
                        </ul>
                    </div>
                </div>
                <div className="experience-item">
                    <img src={PowerSchool} alt="PowerSchool" />
                    <div className='experience-item-content'>
                        <h2>PowerSchool</h2>
                        <h5>Banglore</h5>
                        <h4>Engineering Intern <span>July 2024 - May 2025</span></h4>
                        <ul>
                            <li>Developed and shipped production-level frontend features using React, TypeScript and Ruby on Rails.</li>
                            <li>Supported backend integration, debugging, and feature enhancements under the guidance of senior engineers.</li>
                            <li>Actively participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives to ensure timely delivery of features.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience