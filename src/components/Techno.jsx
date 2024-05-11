import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faPython, faHtml5, faCss3, faJs, faJava, faSwift, faReact } from '@fortawesome/free-brands-svg-icons';
import { DiRedis } from 'react-icons/di';
import { motion} from 'framer-motion';
const iconVariants= (duration)=>({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  }
});
const Techno = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1  whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faPhp} className='text-7xl' style={{ color: '#777bb3' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faPython} className='text-7xl' style={{ color: '#306998' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faHtml5} className='text-7xl' style={{ color: '#e34f26' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faCss3} className='text-7xl' style={{ color: '#1572b6' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faJs} className='text-7xl' style={{ color: '#f0db4f' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faJava} className='text-7xl' style={{ color: '#007396' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faSwift} className='text-7xl' style={{ color: '#ffac45' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faReact} className='text-7xl' style={{ color: '#61dafb' }}/>
        </motion.div>
        <motion.div 
        variants={iconVariants(7)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className='text-7xl' style={{ color: '#b50938' }}/>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Techno;
