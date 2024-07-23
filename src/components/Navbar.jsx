import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://github.com/anay-roy" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anay-roy-407a9b21a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/anay.roy1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
