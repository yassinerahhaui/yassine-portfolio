import React from 'react'
import './Navigation.scss'
import { IconButton } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { motion } from 'framer-motion'

const Navigation = () => {
  const show_list = () => {
    const navlist = document.querySelector('.navlist');
    const bg_dark = document.querySelector('.nav-bg');
    navlist.style.display = 'block';
    bg_dark.style.display = 'block';
    setTimeout(() => {
      navlist.style.left = '0';
    }, 100);
  }

  const nav_bg = ()=> {
    const navlist = document.querySelector('.navlist');
    const bg_dark = document.querySelector('.nav-bg');
    navlist.style.left = '-250px';
    setTimeout(() => {
      navlist.style.display = 'none';
      bg_dark.style.display = 'none';
    }, 300);
  }

  return (
    <>
      <motion.nav 
        className="nav"
        initial={{y:'-100%'}}
        animate={{y: 0}}
        transition={{duration:.5}}
      >
        <div className="nav_start">
          <IconButton aria-label="menu button" onClick={()=> show_list()} className='menu'><MenuRoundedIcon /></IconButton>
          <img src="/logo.png" alt="YRCode logo" aria-label="YRCode logo" title="YRCode logo" className="logo" />
        </div>
        <ul className="nav_end">
          <li><a href="#home" aria-label='header navigation link'>Home</a></li>
          <li><a href="#skills" aria-label='skills navigation link'>Skills</a></li>
          <li><a href="#projects" aria-label='projects navigation link'>Projects</a></li>
          <li><a href="#about" aria-label='about navigation link'>About</a></li>
          <li><a href="#contact" aria-label='contact navigation link'>Contact</a></li>
        </ul>
      </motion.nav>
      <div className="navlist">
        <ul className="">
          <a href="#home" onClick={()=> nav_bg()} aria-label='header navigation link'><li>Home</li></a>
          <a href="#skills" onClick={()=> nav_bg()} aria-label='skills navigation link'><li>Skills</li></a>
          <a href="#projects" onClick={()=> nav_bg()} aria-label='projects navigation link'><li>Projects</li></a>
          <a href="#about" onClick={()=> nav_bg()} aria-label='about navigation link'><li>About</li></a>
          <a href="#contact" onClick={()=> nav_bg()} aria-label='contact navigation link'><li>Contact</li></a>
        </ul>
      </div>
      <div className="nav-bg" onClick={()=> nav_bg()}></div>
    </>
  )
}

export default Navigation