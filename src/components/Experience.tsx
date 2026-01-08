import PowerSchool from '../assets/Images/powerschool.png'
import '../styles/Experience.css'

function Experience(){
    return(
        <div className="experience-container">
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
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
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
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience