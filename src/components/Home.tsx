import '../styles/Home.css';
function Home(){
    return(
        <div id="home" className="home-container">
            <h3>Hello, this is</h3>
            <h1>Kishore G.</h1>
            <p>A Full Stack Developer with experience in React, TypeScript, Ruby on Rails</p>
            <a href="/Kishore_G_Software_Developer.pdf" download="Kishore_G_Software_Developer"><button className="resume-btn">Resume</button></a>
        </div>
    );
}

export default Home;