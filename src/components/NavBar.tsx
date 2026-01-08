import '../styles/NavBar.css';

function NavBar() {
    return (
        <nav className="nav-bar">
            <h2>KISHORE G.</h2>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default NavBar;