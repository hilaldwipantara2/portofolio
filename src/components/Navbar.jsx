import React from "react";
import logo from "../assets/aws.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="flex flex-wrap mx-2 w-10 h-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex flex-grow items-center justify-center gap-4 text-2xl"> {/* Tambahkan flex-grow dan justify-center */}
        <Link to="hero" smooth={true} duration={500} aria-label="Home" className="cursor-pointer"> {/* Tautan ke Home */}
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} aria-label="About" className="cursor-pointer"> {/* Tautan ke About */}
          About
        </Link>
        <Link to="technologies" smooth={true} duration={500} aria-label="Technologies" className="cursor-pointer"> {/* Tautan ke Technologies */}
          Technologies
        </Link>
        <Link to="projects" smooth={true} duration={500} aria-label="Projects" className="cursor-pointer"> {/* Tautan ke Projects */}
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} aria-label="Contact" className="cursor-pointer"> {/* Tautan ke Contact */}
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-4"> {/* Tambahkan space-x-4 untuk memberi jarak */}
        <a href="https://www.linkedin.com/pulse/jeff-bezos-md-yasin-islam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-3xl" /> {/* Ganti ukuran ikon */}
        </a>
        <a href="https://www.facebook.com/JeffBezosOfficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="text-3xl" /> {/* Ganti ukuran ikon */}
        </a>
        <a href="https://www.instagram.com/jeffbezos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-3xl" /> {/* Ganti ukuran ikon */}
        </a>
        <a href="https://x.com/jeffbezos" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-3xl" /> {/* Ganti ukuran ikon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;