import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-rs-purple px-4 md:px-14 space-y-6 md:space-y-0">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-rs-purple text-4xl md:text-7xl font-bold">
            <span>UWRS</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/companies/uw-robosoccer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rs-purple transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/uwrobosoccer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rs-purple transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://youtube.com/@uwrobosoccer?si=JSSAlkvY3335OrPl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rs-purple transition-colors duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-rs-purple-400 text-center md:text-right max-w-xs">
          <p className="text-xl md:text-2xl font-bold">UW RoboSoccer</p>
          <p>200 University Avenue West</p>
          <p>Engineering 5</p>
          <p>Waterloo, ON N2L 3G1</p>
          <p className="mt-4">
            <a href="mailto:uwrobosoccer@gmail.com" className="text-rs-purple hover:text-white">uwrobosoccer@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;