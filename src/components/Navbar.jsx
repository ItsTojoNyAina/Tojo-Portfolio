import React, { useState } from 'react';
import logo from '../assets/logo-white.png';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [hoveredIcons, setHoveredIcons] = useState({
    linkedin: false,
    github: false,
    twitter: false,
    instagram: false
  });

  const handleIconHover = (iconName, isHovered) => {
    setHoveredIcons(prevState => ({
      ...prevState,
      [iconName]: isHovered
    }));
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" style={{ width: '120px', height: 'auto' }} />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/tojo-rakotoarimanana-8064292b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin
            onMouseEnter={() => handleIconHover("linkedin", true)}
            onMouseLeave={() => handleIconHover("linkedin", false)}
            style={hoveredIcons.linkedin ? iconHoverStyle : iconStyle}
          />
        </a>
       <a href="https://github.com/ItsTojoNyAina"> <FaGithub
          onMouseEnter={() => handleIconHover("github", true)}
          onMouseLeave={() => handleIconHover("github", false)}
          style={hoveredIcons.github ? iconHoverStyle : iconStyle}
        /></a>
        <a href="https://twitter.com/Its_TojoNyy?t=vInmM2WTp_LEbaI"><FaTwitterSquare
          onMouseEnter={() => handleIconHover("twitter", true)}
          onMouseLeave={() => handleIconHover("twitter", false)}
          style={hoveredIcons.twitter ? iconHoverStyle : iconStyle}
        /></a>
        <a href="https://instagram.com/_born2pizzaaaaa?igshid=MzN"><FaInstagram
          onMouseEnter={() => handleIconHover("instagram", true)}
          onMouseLeave={() => handleIconHover("instagram", false)}
          style={hoveredIcons.instagram ? iconHoverStyle : iconStyle}
        /></a>
      </div>
    </nav>
  )
}

const iconStyle = {
  fontSize: '30px',
  marginRight: '15px',
  display: 'inline-block',
  transition: 'color 0.5s, transform 0.5s',
};

const iconHoverStyle = {
  ...iconStyle,
  color: 'bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent',
  transform: 'translateY(-5px)'
};

export default Navbar;
