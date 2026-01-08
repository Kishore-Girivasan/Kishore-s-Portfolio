import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer id="contact" className="footer-container">
            <h1>KISHORE G.</h1>
            <h3>Full Stack Engineer | React • TypeScript • Ruby on Rails</h3>
            <h3>© {currentYear} | Built with passion.</h3>
        </footer>
    );
}

export default Footer;