import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import cv from '../assets/CV.pdf'
import {motion} from 'framer-motion';
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xe76e9e', 'template_uf7ccaz', form.current, {
        publicKey: '1qw38coFLX_bCG_Nq',
      })
      .then(
        () => {
          setMessage('Your message has been sent!');
          form.current.reset(); // Réinitialiser le formulaire après l'envoi réussi
        },
        (error) => {
          setMessage('Error while sending the message. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1  whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}}  className='my-10 text-center text-4xl'>Contact Me</motion.h1>
      <div className='flex justify-center'>
        <div className='w-1/2 mr-8'>
          <motion.div  whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 1.5}}
               className='tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='mailto:Itstojonyaina007@gmail.com' className='border-b'>
              {CONTACT.email}
            </a>
            <br /><a 
  href={cv} 
  download={cv} 
  style={{ 
    backgroundColor: '#6a21a8',
    borderRadius: '12px', 
    border: '0', 
    boxSizing: 'border-box', 
    color: '#eee', 
    cursor: 'pointer', 
    display: 'inline-block',
    fontSize: '18px', 
    height: '50px', 
    marginTop: '30px', 
    width: '30%',
    transition: 'background-color 0.3s',
    textDecoration: 'none', 
    textAlign: 'center', 
    lineHeight: '50px', 
    verticalAlign: 'middle' 
  }} 
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#805ad5';
    e.target.style.borderRadius = '12px'; // Ajout du borderRadius
  }} 
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#6a21a8';
    e.target.style.borderRadius = '12px'; 
  }} >
    <span style={{
      display: 'inline-block',
      width: '100%',
      height: '100%'
    }}>
      My CV
    </span>
</a>
          </motion.div>
        </div>
        <motion.div  
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x: 100}}
                transition={{duration: 1.5}}
                className='w-1/2'>
          <form ref={form} onSubmit={sendEmail} style={{ backgroundColor: '#15172b', borderRadius: '20px', boxSizing: 'border-box', padding: '20px' }}>
            <label htmlFor="user_name" style={{ color: '#eee', fontFamily: 'sans-serif', fontSize: '18px' }}>Name</label>
            <div style={{ position: 'relative' }}>
              <input placeholder='Your Name' type="text" id="user_name" name="user_name" style={{ backgroundColor: '#303245', borderRadius: '12px', border: '0', boxSizing: 'border-box', color: '#eee', fontSize: '18px', height: '50px', outline: '0', padding: '4px 20px 0', width: '100%' }} />
             
            </div>
            <label htmlFor="user_email" style={{ color: '#eee', fontFamily: 'sans-serif', fontSize: '18px', marginTop: '30px' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <input placeholder='Your Email' type="email" id="user_email" name="user_email" style={{ backgroundColor: '#303245', borderRadius: '12px', border: '0', boxSizing: 'border-box', color: '#eee', fontSize: '18px', height: '50px', outline: '0', padding: '4px 20px 0', width: '100%' }} />
              
            </div>
            <label htmlFor="message" style={{ color: '#eee', fontFamily: 'sans-serif', fontSize: '18px', marginTop: '30px' }}>Message</label>
            <div style={{ position: 'relative' }}>
              <textarea placeholder='Your message' id="message" name="message" style={{ backgroundColor: '#303245', borderRadius: '12px', border: '0', boxSizing: 'border-box', color: '#eee', fontSize: '18px', height: '150px', outline: '0', padding: '10px 20px', resize: 'none', width: '100%' }}></textarea>
             
            </div>
            <input 
  type="submit" 
  value="Send" 
  style={{ 
    backgroundColor: '#6a21a8',
    borderRadius: '12px', 
    border: '0', 
    boxSizing: 'border-box', 
    color: '#eee', 
    cursor: 'pointer', 
    fontSize: '18px', 
    height: '50px', 
    marginTop: '30px', 
    width: '100%',
    transition: 'background-color 0.3s' 
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#805ad5'} 
  onMouseOut={(e) => e.target.style.backgroundColor = '#6a21a8'} 
/>
          </form>
          {message && <p>{message}</p>}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

