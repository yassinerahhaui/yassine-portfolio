import React,{ useEffect } from 'react'
import './Header.scss'
import { motion } from 'framer-motion'

const Header = () => {
  const updateDimensions = () => {
    const image = document.querySelector('.image')
    const paragraph = document.querySelector('.header_text')
    const header = document.querySelector('.header')
    if (window.innerWidth <= 540) {
      header.textContent = ''
      header.appendChild(image)
      header.appendChild(paragraph)
    } else {
      header.textContent = ''
      header.appendChild(paragraph)
      header.appendChild(image)
    }
    
    
  }
  useEffect(()=> {
    window.addEventListener("resize", updateDimensions)
  },[])
  return (
    <header className='header' id="header">
      {window.innerWidth <= 540? 
        <><motion.img
          src="/yassine.png"
          alt="yassine image"
          aria-label='yassine image'
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          transition={{ delay: .5, duration: 2, type: 'spring', stiffness: 80, damping: 9 }}
          className='image'
        />
        <motion.div
        initial={{ x: '-200%' }}
        animate={{ x: 0 }}
        transition={{ delay: .5, duration: 2, type: 'spring', stiffness: 80, damping: 9 }}
        className="header_text"
        >
        <h1>Hi, I'm yassine</h1>
        <p>I'm a fullstack developper</p>
        </motion.div>
        </>
      :
        <><motion.div
          initial={{ x: '-200%' }}
          animate={{ x: 0 }}
          transition={{ delay: .5, duration: 2, type: 'spring', stiffness: 80, damping: 9 }}
          className="header_text"
        >
          <h1>Hi, I'm yassine</h1>
          <p>I'm a fullstack developper</p>
        </motion.div>
        <motion.img
          src="/yassine.png"
          alt="yassine image"
          aria-label='yassine image'
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          transition={{ delay: .5, duration: 2, type: 'spring', stiffness: 80, damping: 9 }}
          className='image'
        /></>
      }
      
    </header>
  )
}

export default Header