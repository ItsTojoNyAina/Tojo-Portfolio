import React from 'react'
import Aboutpic from '../assets/About.png'
import {motion} from 'framer-motion';
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 1.5}}
      className='my-1 text-center text-4xl'>About <span className='text-neutral-500'>Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-start">
        <motion.div 
        whileInView={{opacity: 1,x: 0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-1/2 lg:p-8 lg:p-8 flex justify-end">
            <div className="flex items-center justify-center">
                <img src={Aboutpic} alt="About"/>
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1,x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 0.5}}
        className='w-full lg:w-1/2 '>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>Currently, I'm wrapping up my bachelor's degree in Software and Hardware Engineering at ISPM Anstobolo while immersing myself in the study of Mathematics at the University of Antananarivo. Additionally, I hold a Diploma of English from the English Teaching Program at Antsahavola, Antananarivo. My journey reflects a passion for both technical expertise and linguistic fluency, driving me towards innovation and effective communication.</p>
                </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
