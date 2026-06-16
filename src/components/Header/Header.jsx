import React, { useEffect } from 'react'
import './Header.scss'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='header' id="header">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="header_text"
      >
        <div className="header_text_content">
          <h1>Hi, I'm <span className="highlight">Yassine</span></h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="description">Building beautiful and functional web experiences</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="header_image_container"
      >
        <img
          src="/yassine.png"
          alt="Yassine - Full Stack Developer"
          className='image'
        />
      </motion.div>
    </header>
  )
}

export default Header