import VIT from '../assets/Images/vit.png';
import '../styles/Education.css'

function Education(){
    return(
        <div className="education-container">
            <div className="education-header">
                <h1>Education</h1>
            </div>
            <div className="education-item">
                <img src={VIT} alt="VIT" />
                <div className='education-item-content'>
                    <h2>M.Tech Integrated Software Engineering <span>2020 - 2025</span></h2>
                    <h5>Vellore Institute of Technology, Vellore</h5>
                </div>
            </div>
        </div>
    );
}

export default Education;