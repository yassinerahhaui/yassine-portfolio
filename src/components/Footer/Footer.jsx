import React from 'react'
import './Footer.scss'
import { motion, useInView, useAnimation } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { Facebook, Instagram, Twitter, GitHub, Email, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer_logo">
        <img src="/logo.png" alt="yrcode logo" />
      </div>
      <div className="footer_start">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#skills">My Skills</a></li>
          <li><a href="#projects">My Projects</a></li>
        </ul>
      </div>
      <div className="footer_middle">
        <ul>
          <li><span><WhatsApp /> </span>: +212 630034545</li>
          <li><span><Email /> </span>: yassinerahhaoui12@gmail.com</li>
        </ul>
      </div>
      <div className="footer_end">
        <form action="" method="post">
          <label htmlFor="newslettre">Newslettre:</label>
          <input type="email" name="newslettre" id="newslettre" placeholder='Enter Your Email...' />
          <Button variant="outlined" color='inherit' sx={{ width: '100%' }}><SendIcon /></Button>
        </form>
      </div>
      <div className="footer_social-media">
        <ul>
          <li><a href=""><Facebook /></a></li>
          <li><a href=""><Instagram /></a></li>
          <li><a href=""><Twitter /></a></li>
          <li><a href="https://github.com/yassinerahhaui"><GitHub /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer