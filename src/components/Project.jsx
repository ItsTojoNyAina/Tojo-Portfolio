import React, { useState } from 'react';
import styles from '../Project.module.css';
import Projet1 from '../assets/projects/projet1.png';
import Projet2 from '../assets/projects/projet2.png';
import Projet3 from '../assets/projects/projet3.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const Project = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = (index) => {
    if (index === 1) setIsHovered1(true);
    if (index === 2) setIsHovered2(true);
    if (index === 3) setIsHovered3(true);
  };

  const handleMouseLeave = (index) => {
    if (index === 1) setIsHovered1(false);
    if (index === 2) setIsHovered2(false);
    if (index === 3) setIsHovered3(false);
  };

  return (
    <div>
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className='my-20 text-center text-4xl'
        >
          Project
        </motion.h1>
      </div>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <ul>
            <li>
              <div className={styles.timelineContent}>
                <motion.h1  whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}className='mb-2 font-semibold'>To-Do List</motion.h1>
                <a href="src/Other/To-Do/To-Do List/Index.html" className={styles.imageLink} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                  <motion.img
                    whileHover={{ opacity: 0.7 }}                   
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    src={Projet1}
                    alt="1"
                    style={{ borderRadius: '8px', filter: isHovered1 ? 'brightness(50%)' : 'brightness(100%)' }}
                  />
                  {isHovered1 && (
                    <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                  )}
                </a>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <motion.h1  whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}className='mb-2 font-semibold'>Portfilio</motion.h1>
                <a href="/Users/macintoshhd/Desktop/REACT-PORTFOLIO/src/Other/Portfolio/Portfolio/index.html" className={styles.imageLink} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                  <motion.img
                    whileHover={{ opacity: 0.7 }}
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    src={Projet2}
                    alt="2"
                    style={{ borderRadius: '8px', filter: isHovered2 ? 'brightness(50%)' : 'brightness(100%)' }}
                  />
                  {isHovered2 && (
                    <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                  )}
                </a>
              </div>
            </li>
            <li>
              <div className={styles.timelineContent}>
                <motion.h1 whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1}} className='mb-2 font-semibold'>Fc Barcelona clone</motion.h1>
                <a href="src/Other/FCB/Fc Barcelona clone/Index.html" className={styles.imageLink} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                  <motion.img
                    whileHover={{ opacity: 0.7 }}
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}               
                    transition={{ duration: 1.5 }}
                    src={Projet3}
                    alt="3"
                    style={{ borderRadius: '8px', filter: isHovered3 ? 'brightness(50%)' : 'brightness(100%)' }}
                  />
                  {isHovered3 && (
                    <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                  )}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
