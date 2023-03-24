import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import { motion, useInView, useAnimation } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

// 'https://ayoub-dr.herokuapp.com/add/message'
const animation = {
  start: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } }
}
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const msg = document.querySelector('.msg')
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true })
  const contact_me = (e) => {
    e.preventDefault()
    fetch('https://ayoub-dr.herokuapp.com/add/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: name,
        email: email,
        subject: subject,
        message: message,
      })
    }).then(res => {
      msg.style.display = 'block'
      setName(''); setEmail(''); setSubject(''); setMessage('')
    })
  }
  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [controls, isInView])
  return (
    <motion.div 
      className='contact-me' 
      id='contact'
      ref={ref}
      initial='start'
      animate={controls}
      variants={animation}
    >
      <h2 className='contact-me_title'>Contact Me</h2>
      <div className="contact-me_form">
        <form action="" method="post" onSubmit={contact_me}>
          <div className="name-mail">
            <div className="contact-me_form_item name">
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" name="fullname" required placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)} id="fullname" />
            </div>
            <div className="contact-me_form_item email">
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required placeholder='Enter Your Email...' id="email" />
            </div>
          </div>
          <div className="contact-me_form_item">
            <label htmlFor="subject">Subject:</label>
            <input type="text" onChange={(e) => setSubject(e.target.value)} name="subject" value={subject} required placeholder='Enter Your Subject...' id="subject" />
          </div>
          <div className="contact-me_form_item">
            <label htmlFor="message">Message:</label>
            <textarea name="message" onChange={(e) => setMessage(e.target.value)} id="message" value={message} required placeholder='Create Your Message Here...' cols="30" rows="4"></textarea>
          </div>
          <Button variant="outlined" color='inherit' sx={{width:'100%'}}><SendIcon /></Button>
        </form>
      </div>
      <div className="msg">
        <div className="msg_bg" onClick={() => msg.style.display = 'none'}></div>
        <div className="msg_box">
          <span className="material-icons-outlined msg_box_close" onClick={() => msg.style.display = 'none'}>close</span>
          <p className='msg_box_success'>
            Thank you for reaching out to us! We appreciate your interest in our services and will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact