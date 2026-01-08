import '../styles/Skills.css';

function Skills() {
    return (
        <div id="skills" className="skills-container">
            <div className="skills-header">
                <h1>Skills</h1>
            </div>
            <div className="skills-content">
                <div className="skills-single-card">
                    <h3>Technical Proficiency</h3>
                    <ul className="skills-list">
                        <li>
                            <strong>Languages:</strong> TypeScript, Java, Ruby, and SQL 
                        </li>
                        <li>
                            <strong>Frontend:</strong> React, HTML5, and CSS3 
                        </li>
                        <li>
                            <strong>Backend:</strong> Ruby on Rails
                        </li>
                        <li>
                            <strong>Testing:</strong> Experienced in Playwright AI Automated Testing 
                        </li>
                        <li>
                            <strong>Tools & Platforms:</strong> Git, GitLab, CI/CD, Docker and AWS (exposure) 
                        </li>
                        <li>
                            <strong>Monitoring & Design:</strong> Figma, Datadog, Grafana, and Bugsnag 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;