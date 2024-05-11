import React from 'react';
import Profilpic from '../assets/Tojo_Profil.png';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 initial={{x: -100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 0.5, delay: 0}} 
                className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-4xl'>
                    RAKOTOARIMANANA Tojo Ny Aina
                </motion.h1>
                <motion.span initial={{x: -100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.5}} 
                 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Web & Mobile Developer
                </motion.span>
                <motion.p initial={{x: -100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 0.7, delay: 1}} 
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>As an aspiring web and mobile developer, I am dedicated to continuous learning and improvement in crafting innovative applications for both web and mobile platforms. Proficient in languages like HTML, CSS, JavaScript, and exploring frameworks such as React and Swift, I am passionate about honing my skills to create dynamic and responsive user experiences. With a focus on growth and innovation, I'm excited to collaborate on projects that challenge me to push boundaries and expand my capabilities. Dive into my portfolio to witness my journey and the projects I've embarked on so far.</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img initial={{x: 100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}} 
                src={Profilpic} alt="Profpic" style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 300px)', borderRadius: '8px' }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
